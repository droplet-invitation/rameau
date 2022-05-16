import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';
const { kakao } = window;

const mapStyle = css`
  .title {
    width: 100%;
  }
  .map {
    margin: 0 auto;
    width: 1080px;
    height: 500px;
    ${media.mobile} {
      width: 100%;
      height: 250px;
    }
  }
`;

const Map = () => {
  const title = require('./title.jpg');
  const footer = require('./footer.jpg')
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
			center: new kakao.maps.LatLng(37.5214918, 127.0354608),
			level: 3
    };
    new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return (
    <div className={mapStyle}>
      <img src={title} className="title" />
      <div>
        <div id="map" className="map">
        </div>
      </div>
      <img src={footer} className="title" />
    </div>
  );
}

export default Map
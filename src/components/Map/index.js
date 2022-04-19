/* global kakao */
import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';
const { kakao } = window;

const mapStyle = css`
  .map {
    margin: 0 auto;
    width: 1080px;
    height: 500px;
    ${media.mobile} {
      width: 100%;
      height: 200px;
    }
  }
`;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
    };
    let map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return (
    <div className={mapStyle}>
      <div>
        <div id="map" className="map">
        </div>
      </div>
    </div>
  );
}

export default Map
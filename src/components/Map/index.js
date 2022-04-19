/* global kakao */
import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';
const { kakao } = window;

const mapStyle = css`
  .map {
    width: 500px;
    height: 500px;
    border: solid 1px;
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
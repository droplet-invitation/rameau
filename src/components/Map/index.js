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
      center: new window.kakao.maps.LatLng(35.85133, 127.734086),
      level: 13,
    };
    let map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return (
    <div className={mapStyle}>
      박유진 ♥ 장동선 결혼합니다.
      <div>
        <div id="map" className="map">
        </div>
      </div>
    </div>
  );
}

export default Map
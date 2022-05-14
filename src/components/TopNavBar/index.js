import React from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';

const topNavBar = css`
  font-family: 'Cafe24Oneprettynight';
  height: 60px;
  line-height: 60px;
  background-color: rgb(58, 64, 42);
  color: #ffffff;
  ${media.mobile} {
    width: 100%;
    height: 48px;
    line-height: 48px;
  }
`;

const TopNavBar = () => {
  return (
    <div className={topNavBar}>
      박유진 ♥ 장동선 결혼합니다.
    </div>
  );
}

export default TopNavBar
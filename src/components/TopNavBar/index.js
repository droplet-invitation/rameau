import React from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';

const topNavBar = css`
  font-family: 'Cafe24Oneprettynight';
  // height: 60px;
  // line-height: 60px;
  background-color: rgb(58, 64, 42);
  // color: #ffffff;
  ${media.mobile} {
    width: 100%;
    // height: 48px;
    // line-height: 48px;
    .img {
      width: 100%;
    }
  }
`;

const TopNavBar = () => {
  const img = require('./main1.jpg');
  return (
    <div className={topNavBar}>
      <img className="img" src={img} alt="top" />
    </div>
  );
}

export default TopNavBar
import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';

const topNavBar = css`
  ${media.desktop} {
    width: 1080px;
    margin: 0 auto;
    border: solid 1px;
  }
  ${media.mobile} {
    width: 100%;
    border: solid 1px;
  }
  .date {
    ${media.desktop} {
      font-size: 30px;

    }
    ${media.mobile} {
      font-size: 11px;

    }
  }
    .title {
      ${media.desktop} {
        font-size: 60px;
  
      }
      ${media.mobile} {
        font-size: 20.5px;
  
      }
    }
  }
`;

const TopNavBar = () => {
  return (
    <div className={topNavBar}>
      <div className="date">
        2022. 6. 18.
      </div>
      <div className="title">
        장동선 & 박유진
      </div>
      <img src="./main.png" alt="top" />
    </div>
  );
}

export default TopNavBar
import React from "react";
import media from '../../shared/mediaQuery';
// import styled from '../../shared/styled';
import { css } from '@emotion/css';

const topNavBar = css`
  ${media.desktop} {
    width: 1080px;
    margin: 0 auto;
    border: solid 1px;
  }
  ${media.mobile} {
    width: 100%;
    margin-top: 56px;
  }
  .date {
    ${media.desktop} {
      font-size: 30px;

    }
    ${media.mobile} {
      font-size: 11px;
      text-align: right;
      padding: 0 96px;

    }
  }
    .title {
      font-family: 'Cafe24Oneprettynight';
      ${media.desktop} {
        font-size: 60px;
  
      }
      ${media.mobile} {
        margin-top: 9px;
        font-size: 24px;
  
      }
    }
    .marryDate {
      font-family: 'Cafe24Oneprettynight';
      ${media.mobile} {
        margin-top: 53px;
        font-size: 16px;
      }
      &__limit {
        margin-top: 10px;
        font-size: 16px;

      }

    }
    .wrap {
      margin: 66px 0px 0;
      padding: 0 10px;
      .img {
        width: 100%;
        height: calc(100vw / 1.13)
      }

    }
  }
`;

const TopNavBar = () => {
  const img = require('./main.png');

  return (
    <div className={topNavBar}>
      <div className="date">
        2022. 6. 18.
      </div>
      <div className="title">
        장동선 &nbsp;  &  &nbsp;  박유진
      </div>
      <div className="marryDate">
        우리 결혼하는 날
        <div className="marryDate__litmit">
          D - 000
        </div>
      </div>
      <div className="wrap">
        <img className="img" src={img} alt="top" />
      </div>
      <div>
        2022년 6월 18일 오후 5시 30분
        <br />
        마켓오 도곡점 3층
      </div>
      <div>
        모시는 글
        <br />
        나 사랑이 믿어지던 시간을 기억해
        <br />
        사랑이 사랑으로만 설면되던 순간들을
        <br />
        어떤 물음도 단 하나의 답으로 충분했던
        <br />
        너를 보면 나 사랑을 하고 있어
        <br />
        - 강하늘, 사랑을 하고 있어 중
        <br />
        <br />
        한평생 다정하게 살겠습니다.
        <br />
        시작의 날에 함께 해주세요.
      </div>
    </div>
  );
}

export default TopNavBar
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    display: flex;
    background-color: #ffffff;
    margin-top: 30px;
    .img-preview {
      width: calc((100% - 40px) / 3);
      height: calc((100vw - 40px) / 3);
      margin-bottom: 10px;
    }
  }
`;

const imgGallery = () => {
  const img = [
    require('./img1.jpeg'),
    require('./img2.jpeg'),
    require('./img3.jpeg'),
    require('./img4.jpeg'),
    require('./img5.jpeg'),
    require('./img6.jpeg'),
    require('./img7.jpeg'),
    require('./img8.jpeg'),
    require('./img9.jpeg')
  ]

  

  return (
    <div className={topNavBar}>
      <img className="img-preview" src={img[0]} alt="top" />
      <img className="img-preview" src={img[1]} alt="top" />
      <img className="img-preview" src={img[2]} alt="top" />
      <img className="img-preview" src={img[3]} alt="top" />
      <img className="img-preview" src={img[4]} alt="top" />
      <img className="img-preview" src={img[5]} alt="top" />
      <img className="img-preview" src={img[6]} alt="top" />
      <img className="img-preview" src={img[7]} alt="top" />
      <img className="img-preview" src={img[8]} alt="top" />
    </div>
  );
}

export default imgGallery
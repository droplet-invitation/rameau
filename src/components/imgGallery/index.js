import React, { useState } from "react";
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
    background-color: #ffffff;
    margin-top: 30px;
    .wrap {
      justify-content: space-evenly;
      flex-wrap: wrap;
      display: flex;

    }
    .img-button {
      display: block;
      width: calc((100% - 40px) / 3);
      height: calc((100vw - 40px) / 3);
      margin-bottom: 10px;
      padding: 0;
      border: none;
      .img-preview {
        width: 100%;
        height: 100%;
      }
    }

    .show-img {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: #000000;
      z-index: 5;
      &__full-img {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
      }
    }
  }
`;

const ImgGallery = () => {
  const [checked, setChecked] = useState(false);
  const [currnetImg, setImg] = useState('');

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

  const activateButton = (e) => {
    e.preventDefault();
    setChecked(!checked);
  };

  const deleteRow = (index) => {
    setChecked(!checked);
    setImg(img[index]);
  }

  

  return (
    <div className={topNavBar}>
      <div className="wrap">
        <button onClick={(e) => deleteRow(0, e)} className="img-button">
          <img className="img-preview" src={img[0]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(1, e)} className="img-button">
          <img className="img-preview" src={img[1]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(2, e)} className="img-button">
          <img className="img-preview" src={img[2]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(3, e)} className="img-button">
          <img className="img-preview" src={img[3]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(8, e)} className="img-button">
          <img className="img-preview" src={img[8]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(4, e)} className="img-button">
          <img className="img-preview" src={img[4]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(5, e)} className="img-button">
          <img className="img-preview" src={img[5]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(6, e)} className="img-button">
          <img className="img-preview" src={img[6]} alt="top" />
        </button>
        <button onClick={(e) => deleteRow(7, e)} className="img-button">
          <img className="img-preview" src={img[7]} alt="top" />
        </button>
      </div>
      adfasdfsdfsa
      {
        checked === true &&
        <div className="show-img" onClick={activateButton}>
          <img src={currnetImg} alt="999" className="show-img__full-img" />
        </div>
      }


    </div>
  );
}

export default ImgGallery
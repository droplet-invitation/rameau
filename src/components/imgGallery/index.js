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
    .img-button {
      display: block;
      width: calc((100% - 40px) / 3);
      height: calc((100vw - 40px) / 3);
      margin-bottom: 10px;
      padding: 0;
      .img-preview {
        width: 100%;
        height: 100%;
      }
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

  let currnetImg = '';
  let showImg = false;
  const activateButton = (index) => {
    showImg = !showImg;
    currnetImg = img[index]
  };

  

  return (
    <div className={topNavBar}>
      <button onClick={activateButton(0)} className="img-button">
        <img className="img-preview" src={img[0]} alt="top" />
      </button>
      <button onClick={activateButton(1)} className="img-button">
        <img className="img-preview" src={img[1]} alt="top" />
      </button>
      <button onClick={activateButton(2)} className="img-button">
        <img className="img-preview" src={img[2]} alt="top" />
      </button>
      <button onClick={activateButton(3)} className="img-button">
        <img className="img-preview" src={img[3]} alt="top" />
      </button>
      <button onClick={activateButton(4)} className="img-button">
        <img className="img-preview" src={img[4]} alt="top" />
      </button>
      <button onClick={activateButton(5)} className="img-button">
        <img className="img-preview" src={img[5]} alt="top" />
      </button>
      <button onClick={activateButton(6)} className="img-button">
        <img className="img-preview" src={img[6]} alt="top" />
      </button>
      <button onClick={activateButton(7)} className="img-button">
        <img className="img-preview" src={img[7]} alt="top" />
      </button>
      <button onClick={activateButton(8)} className="img-button">
        <img className="img-preview" src={img[8]} alt="top" />
      </button>


    </div>
  );
}

export default imgGallery
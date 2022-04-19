import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';

const guestBookStyle = css`
  width: 1080px;
  margin: 20px auto;
  .guest-book-form {
    width: 720px;
    margin: 0 auto;
    border: solid 1px;
    &__title {
      font-size: 18px;
      text-align: center;
    }
    &__button {
      margin: 20px 20px;
      display: block;
      width: 100%;
      height: 48px;
      border: solid 1px;
    }

  }
`;

const guestBook = () => {
  return (
    <div className={guestBookStyle}>
      방명록
      <div className="guest-book-form">
        <p className="guest-book-form__title">
          방명록을 작성해주세요.
        </p>
        <input></input>
        <input></input>
        <textarea></textarea>
        <button className="guest-book-form__button">등록하기</button>

      </div>
    </div>
  );
}

export default guestBook
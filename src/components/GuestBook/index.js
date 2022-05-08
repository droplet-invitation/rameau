import React, { useEffect } from "react";
import media from '../../shared/mediaQuery';
import { css } from '@emotion/css';

const guestBookStyle = css`
  width: 1080px;
  margin: 20px auto;
  .guest-book-form {
    width: 720px;
    margin: 0 auto;
    padding: 20px 20px;
    border: solid 1px;
    &__title {
      font-size: 18px;
      text-align: center;
    }
    &__input {
      margin-right: 20px;
      margin-bottom: 20px;
      width: 45%;
      height: 48px;
      border: solid 1px;
    }
    &__textarea {
      margin-bottom: 20px;
      width: 100%;
      height: 160px;
      border: solid 1px;
      resize: none;
    }
    &__button {
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
        <input className="guest-book-form__input"></input>
        <input className="guest-book-form__input"></input>
        <textarea className="guest-book-form__textarea"></textarea>
        <button className="guest-book-form__button">등록하기</button>

      </div>
    </div>
  );
}

export default guestBook
import { css, Global } from '@emotion/core';
import media from './mediaQuery';

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: 'Cafe24Oneprettynight';
        font-style: normal;
        font-weight: normal;
        src: url('/fonts/Cafe24Oneprettynight.eot');
        src: url('/fonts/Cafe24Oneprettynight.eot?#iefix') format('embedded-opentype'),
          url('/fonts/Cafe24Oneprettynight.woff2') format('woff2'),
          url('/fonts/Cafe24Oneprettynight.woff') format('woff'),
          url('/fonts/Cafe24Oneprettynight.ttf') format('truetype');
      }
      html,
      html h1,
      html h2,
      html h3,
      html h4,
      html h5,
      html h6,
      html a,
      html p,
      html li,
      input,
      textarea,
      span,
      div,
      html,
      body,
      html a {
        margin: 0;
        padding: 0;
        font-family: 'Notokr-Regular', sans-serif;
      }
      body {
        a {
          text-decoration: none;
        }
        button {
          border: none;
          background: none;
          outline: none;
          padding: 0;
          cursor: pointer;
        }
        &.body-scroll-ban {
          overflow: hidden;
        }
        .page-layout {
          ${media.desktop} {
            border-top: 3px solid #555555;
            width: 944px;
            margin: 56px auto 0;
            padding-top: 24px;
          }
        }
        .page-title {
          color: #333333;
          background-color: #f6f6f6;
          padding: 9px 20px;
          border-bottom: 1px solid #cfcfcf;
          font-weight: normal;
          ${media.mobile} {
            font-size: 20px;
          }
        }
        .mobile {
          ${media.desktop} {
            display: none;
          }
        }
        .desktop {
          ${media.mobile} {
            display: none;
          }
        }
      }
    `}
  />
);
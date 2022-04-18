export const BREAK_POINT = 1079;
export const CONTENT_WIDTH = 1080;
export default {
  mobile: `@media only screen and (max-width: ${BREAK_POINT}px)`,
  desktop: `@media only screen and (min-width: ${BREAK_POINT + 1}px)`,
  proposalMobile: `@media only screen and (max-width: 1370px)`,
  proposalDesktop: `@media only screen and (min-width: 1371px)`,
  contentWidth: CONTENT_WIDTH,
  BREAK_POINT,
};
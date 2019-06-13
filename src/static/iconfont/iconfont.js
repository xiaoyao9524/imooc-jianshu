import { createGlobalStyle } from 'styled-components';

const iconFont =  createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1560413390577'); /* IE9 */
    src: url('./iconfont.eot?t=1560413390577#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1560413390577') format('woff'),
    url('./iconfont.ttf?t=1560413390577') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560413390577#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default iconFont;

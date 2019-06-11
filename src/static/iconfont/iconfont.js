import { createGlobalStyle } from 'styled-components';

const iconFont =  createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1560153365666'); /* IE9 */
    src: url('./iconfont.eot?t=1560153365666#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAW0AAsAAAAACtwAAAVlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqIRIZyATYCJAMYCw4ABCAFhG0HYRsxCREVpNOR/RxwN5fRbEOFi8qTyTLa9/iNHkmZmbkjoMZ+v6eoNEiike7JJUQyCQ8FQoSUaITk0/lawvt5OvVdLvyX1GlKpIJPrQf5sjnZHIxCMNgJgMW5OkKhL8IM5Vl6B2iHaddBUjr6/+9VzTwesHntW1z++5lzUE4oHJpAAUrH2DQ2RautWF37iM4woe7JZlxOQKth4bDlwnISxDKRBSw579alHYgLermDETSrasOhGcIjFM1xCu8igIfo98N/iA1iEJUEsutW54KOkP3M480onLNyzgISCPZnxegoEmaATLhstF8AnsRn4FoXf4FvBUC7ZlH+8XiufF73vP7NKKu1IBZ30K75REm5sn+eUIHk7Uhf0xZ3UOBhRH4pMRK/6jAKv+oxAv9HCd8jdd1jcw8ImwDhlYmFnEVw71cyNSM3iVTqiUkyULR7hFTK79FEMARFtLBxSyzexCKTZ0yHncZkasOF4F2b4M0Iy0wFey6EEZ4EpjKza/fuXO82/wrTzvyctrxgTM8o49PhTkrGKH8G8/Ouame9otGg6GBY58RqtatHb9DGMgbdPK1Tm7YRces0G1Tr1WspFKB1QnqFyt2SZ2F0icZIkoROoQleA3uFLQzfqFwbvzIgP153KnBV+VGMbWfTL2aTa5Xt5h0KlK054o5JuyC1Ftzq5Kvk6zhltdYJ74aQXu/sXLteFWYINhgwTKVHaOVBF54Mn3+Y7nu6OKXXajl5jU6O6RR1BpV+tZMSD9ZgzGbaaCRPGn2utYowKBZcIQjNptEFRzSHXHePCtmXPHVywmIxSTtMUZxnMlFGI10htsNXSzt0qu4sWrIvcbBy1iG3GsP2J6rLZRdcWzbhl1yaL8oG3P64f0gKKt3WaWv2T9+XtE95gSi7sM3n8lreKOZPy3ure7YjdfWMWLq3GEFjzE2Bj4/gpuIB8sVZhWzOldN8sZiPktOMUMy7HbgtoeeVq1tDZreqT+Q2xQ9JeiEcEzwsNnjgIOUtqv+PNhon7NrvMwqwzffSSmhoz/fqOt7GTb4X65STktCUSRd3qW1lOrSrb6rrkdGU2M0+JL2hE8sWyx4+lOcP7r4+fsv8mFunZBeeFBd9bJn2b//xRfSQCRU7N3oPye3gkQJZcyhuKTzFITmXZQoTX5TMFWna4Qf8Evyss6cH9M0WoL7PBpHW4hoH8HZq8VzJRXGY8Wt7cD1Q3Pz1kgOS5fs7f7xgT1v9ouHkXCttfwHo/cslB0zTvQtVddXQHZs1XtKxOK+Uj6ort9pebTpC+x0il0JxiXGI2tVt/KitTVel2TaVbZCDlXbuADNb1uOPHuHr8PWBdP0QZQhxzFxHjuNt2cLzJeOHCAnGUTIOIzO6p6a+dw5gQTZMz7xloMGl13hD5NTj3F96M6ffry9ptU3/JiY+wLHvgEg5eRtcBpvc/1LBLPgDC4x9eSkSQ83z3h7fxKnuoUQjWnWIv6271/19KQfMxQTNBjKImgxB0myEnOkzULSZharZHLSaVnR0mz79AReyBJgyASDotgWiTi+QdLtEzvR7UAx6B1V3wKHVAeZ4yjZjAaQ2J4uFxxrKF6iKSTiT38Sl3yhvfWHzooj5j9apECRhXE69IaHdxx7uLlPvBQjLA1zhatj3DNpyi5UPG+/1MYpE0zOFFQ+jjZPFwmMN5QtUxSSC0X5T+flvlLe+sB09F7z/aJ1aHJIwNpDf5GTqeS7V7i5TT1EBYlTMA1zJir3GGXTzRi1WPmy2iOpjRIOEVR4eXzm8ynMAILKfMPAwHONjAkyIiWB2B6Xru/d0unAui7dU3IOHVV6R3OuGCWt+UM9FvXBY2KoZjQAAAAA=') format('woff2'),
    url('./iconfont.woff?t=1560153365666') format('woff'),
    url('./iconfont.ttf?t=1560153365666') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560153365666#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-font:before {
    content: "\e659";
  }

  .icon-compass_0:before {
    content: "\e51c";
  }

  .icon-nav-writing:before {
    content: "\e628";
  }

  .icon-phonedownload:before {
    content: "\eb7d";
  }

  .icon-search:before {
    content: "\e653";
  }
`;

export default iconFont;

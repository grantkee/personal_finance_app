import React from 'react';
import { render } from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import chinese_rocks_woff2 from '../../../public/fonts/chinese_rocks/chinese_rocks_rg-webfont.woff2';
import App from "../components/App";

const chinese_rocks_rg = {
  fontFamily: 'chinese_rocks_rg',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('chinese_rocks_rg'),
    url(${chinese_rocks_woff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#90caf9'
    }
  },
  typography: {
    fontFamily: 'chinese_rocks_rg, Roboto, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [chinese_rocks_rg],
      },
    },
  },
});

document.addEventListener('DOMContentLoaded', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  );
});

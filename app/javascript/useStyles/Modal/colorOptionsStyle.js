import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  hexToRgb
} from "../main";

const colorOptionsStyle = {
  container: {
    border: "0",
    marginBottom: "15px",
    marginTop: "15px",
    // borderRadius: "6px",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
    background: whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    // minWidth: "0",
    // wordWrap: "break-word",
    fontSize: ".875rem",
    height: "100px",
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemContainer: {
    marginLeft: '5px',
    margingRight: '5px',
    borderRadius: '50%',
  },
  primary: {
    color: primaryColor[2],
    backgroundColor: primaryColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: primaryColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: primaryColor[0],
    },
  },
  warning: {
    color: warningColor[2],
    backgroundColor: warningColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: warningColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: warningColor[0],
    },
  },
  danger: {
    color: dangerColor[2],
    backgroundColor: dangerColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: dangerColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: dangerColor[0],
    },
  },
  success: {
    color: successColor[2],
    backgroundColor: successColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: successColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: successColor[0],
    },
  },
  info: {
    color: infoColor[2],
    backgroundColor: infoColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: infoColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: infoColor[0],
    },
  },
  rose: {
    color: roseColor[2],
    backgroundColor: roseColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: roseColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: roseColor[0],
    },
  },
  gray: {
    color: grayColor[2],
    backgroundColor: grayColor[2],

    '&.Mui-checked': {
      color: whiteColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: grayColor[0],
    },
    '&:hover': {
      color: whiteColor,
      backgroundColor: grayColor[0],
    },
  },
};

export default colorOptionsStyle;

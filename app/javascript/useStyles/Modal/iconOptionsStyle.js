import {
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
  a: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  b: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  c: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  d: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  e: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  f: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
  g: {
    '&.Mui-checked': {
      color: blackColor,
      border: `3px solid ${blackColor}`,
    },
    '&:active': {
      backgroundColor: blackColor,
    },
    '&:hover': {
      color: blackColor,
    },
  },
};

export default colorOptionsStyle;

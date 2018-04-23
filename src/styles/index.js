/*
 * Style
 */

export const Color = {
  screenBackground: '#ffffff',
  white: '#ffffff',
  black: '#000000',

  grayHighlight: '#EBEEF2',
  grayLight: '#939598',
  grayNormal: '#939598',
  grayDark: '#58595B',
  grayBlack: '#333333',

  orangeLight: 'rgba(242,101,34,.1)',
  orangeNormal: '#F26522',
  orangeDark: '#B74C01',

  orangeRGBA: 'rgba(242,101,34,1)',

  textLight: '#58595B',
  textNormal: '#000000',
  textHighlight: '#666666',

  //Navigation
  headerBackground: '#EBEEF2',
  tabBackground: '#EBEEF2',

  //Green Maps
  greenNormal: '#0D9A54',
};

export const Touchable = {
  opacityNone: 1,
  opacityHighlight: 0.9,
  opacityHigh: 0.75,
  opacityNormal: 0.5,
  opacityLow: 0.25,
  hitSlop: (top = 10, right, bottom, left) => {
    //NOTE: User can set hitslop in different ways (same way as 'padding: x x x x' works in CSS)
    // If only 'top' arg is received, will set all sides
    // If 'top' and 'right' are received, will set vertical and horizontal values
    return {
      top: top,
      right: right || top,
      bottom: bottom || top,
      left: left || right || top,
    };
  },
};

export default {};

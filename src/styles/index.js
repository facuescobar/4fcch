/*
 * Style
 */

import { fonts } from 'assets';
import { reduce } from 'lodash';

export const Color = {
  screenBackground: '#F7F7F7',
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
  textNormal: '#333333',
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

export const TextStyle = {
  black: 'w-black',
  blackIta: 'w-black-italic',

  blackSC: 'w-black-sc',
  blackItaSC: 'w-black-italic',

  bold: 'w-bold',
  boldIta: 'w-bold-italic',

  boldSC: 'w-bold-sc',
  boldItaSC: 'w-bold-italic-sc',

  book: 'w-book',
  bookIta: 'w-book-italic',

  light: 'w-light',
  lightIta: 'w-light-italic',

  lightSC: 'w-light-sc',
  lightItaSC: 'w-light-italic-sc',

  med: 'w-medium',
  medIta: 'w-medium-italic',

  semiBoldSC: 'w-semi-bold-sc',
  semiBoldItaSC: 'w-semi-bold-italic-sc',
};

export default {};

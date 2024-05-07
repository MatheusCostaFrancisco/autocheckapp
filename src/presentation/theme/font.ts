import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const UserDevice: number = Dimensions.get('screen').fontScale;
const screenDensity = PixelRatio.get();

const FONT_SIZE_35: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(31) : RFValue(35);
const FONT_SIZE_30: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(26) : RFValue(30);
const FONT_SIZE_25: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(21) : RFValue(25);
const FONT_SIZE_20: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(16) : RFValue(20);
const FONT_SIZE_16: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(12) : RFValue(16);
const FONT_SIZE_12: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(8) : RFValue(12);
const FONT_SIZE_10: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(6) : RFValue(10);

export {
  FONT_SIZE_35,
  FONT_SIZE_30,
  FONT_SIZE_25,
  FONT_SIZE_20,
  FONT_SIZE_16,
  FONT_SIZE_12,
  FONT_SIZE_10,
};

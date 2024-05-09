import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const UserDevice: number = Dimensions.get('screen').fontScale;
const screenDensity = PixelRatio.get();

const Base_Value: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(4) : RFValue(8);
const Small_Padding: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(12) : RFValue(16);
const Medium_Padding: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(20) : RFValue(24);
const Large_Padding: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(28) : RFValue(32);
const Small_Spacing: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(44) : RFValue(48);
const Medium_Spacing: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(60) : RFValue(64);
const Large_Spacing: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(92) : RFValue(96);
const Extra_Large_Spacing: number =
  UserDevice > 1 && screenDensity >= 1.75 ? RFValue(188) : RFValue(192);

export {
  Base_Value,
  Small_Padding,
  Medium_Padding,
  Large_Padding,
  Small_Spacing,
  Medium_Spacing,
  Large_Spacing,
  Extra_Large_Spacing,
};

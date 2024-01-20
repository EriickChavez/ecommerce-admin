import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  lottie: {
    flex: 1,
    width: RFValue(150),
    height: RFValue(150),
  },
  text: {
    fontSize: RFValue(16),
  },
});

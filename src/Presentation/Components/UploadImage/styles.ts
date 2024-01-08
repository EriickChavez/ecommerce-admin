import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width: defaultWidth} = Dimensions.get('window');

export default StyleSheet.create({
  containerUpload: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderRadius: 10,
    height: RFValue(150),
  },
  title: {
    marginBottom: 15,
    fontSize: RFValue(14),
  },
  button: {
    borderRadius: 10,
    width: defaultWidth,
    height: RFValue(150),
  },
  image: {
    width: defaultWidth,
    height: RFValue(150),
  },
  text: {
    fontSize: RFValue(14),
  },
});

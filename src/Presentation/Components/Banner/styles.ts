import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  banner: {
    width: '100%',
    height: RFValue(150),
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: RFValue(150),
  },
  textContainer: {
    padding: RFValue(10),
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  description: {
    fontSize: RFValue(16),
  },
});

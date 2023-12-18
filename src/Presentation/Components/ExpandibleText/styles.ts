import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    // borderColor: '#DEE2E7',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: RFValue(12),
  },
  button: {
    color: '#0D6EFD',
    fontSize: RFValue(10),
    alignSelf: 'flex-end',
  },
});

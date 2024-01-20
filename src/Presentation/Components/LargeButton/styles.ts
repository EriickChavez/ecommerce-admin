import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0D6EFD',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
});

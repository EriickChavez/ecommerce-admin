import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  banner: {
    height: RFValue(150),
  },
  flex: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
  },
  characteristicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  chipsContainer: {
    padding: 5,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: RFValue(150),
  },
});

import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: '3%',
  },
  viewContainer: {
    marginVertical: RFValue(10),
  },
  banner: {
    height: RFValue(150),
  },
});

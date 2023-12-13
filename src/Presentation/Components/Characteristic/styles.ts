import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  text: {
    fontSize: RFValue(10),
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
  },
  description: {
    marginLeft: 10,
    fontWeight: '400',
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

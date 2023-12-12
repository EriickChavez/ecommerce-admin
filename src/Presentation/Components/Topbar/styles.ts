import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  userContainer: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  greetings: {
    fontSize: RFValue(8),
  },
  username: {
    fontSize: RFValue(12),
    fontWeight: '500',
  },
  notificationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

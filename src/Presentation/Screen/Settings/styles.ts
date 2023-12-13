import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    padding: RFValue(12),
  },
  username: {
    fontSize: RFValue(16),
  },
  textButtonContainer: {
    padding: RFValue(12),
    flex: 1,
  },
  textcontainer: {
    marginVertical: 10,
  },
  textButton: {
    fontSize: RFValue(14),
  },
});

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
  text: {
    fontSize: RFValue(14),
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
    fontSize: RFValue(16),
  },
  containerDescription: {
    marginVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    borderWidth: 0,
    padding: 0,
  },
  chipsContainer: {
    padding: 5,
  },
  categoryContainer: {
    marginBottom: 10,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: RFValue(150),
  },
});

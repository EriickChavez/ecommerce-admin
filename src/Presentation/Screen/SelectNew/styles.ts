import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: RFValue(20),
    marginVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productButton: {
    backgroundColor: '#007bff',
  },
  categoryButton: {
    backgroundColor: '#ff9800',
  },
  bannerButton: {
    backgroundColor: '#4caf50',
  },
  text: {
    fontSize: RFValue(20),
    color: '#ffffff',
  },
});

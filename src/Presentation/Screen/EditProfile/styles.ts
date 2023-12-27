import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  input: {
    padding: 10,
    width: '100%',
  },
  inputExpandible: {
    borderWidth: 1,
    borderColor: '#8B96A5',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#A3BE8C',
    borderWidth: 2,
    borderColor: '#93ae7c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: RFValue(16),
    color: '#FFFFFF',
  },
  box: {
    width: 100,
    height: 1,
    backgroundColor: 'rgba(0,0,0,0,0)',
  },
});

import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
  },
  containerInput: {
    borderColor: '#8B96A5',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#A3BE8C',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: RFValue(14),
    fontWeight: '600',
  },
});

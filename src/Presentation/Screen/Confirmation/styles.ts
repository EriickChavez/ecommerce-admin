import {StyleSheet} from 'react-native';
import {lightColors} from '../../../Themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: lightColors.danger,
  },
  text: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '500',
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 25,
  },
});

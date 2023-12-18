import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: '10%',
  },
  title: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 10,
  },
  ExpandableTextInput: {
    borderColor: '#8B96A5',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    fontSize: RFValue(15),
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

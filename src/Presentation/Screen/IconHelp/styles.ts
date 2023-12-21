import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const minWidthCard = width / 4 - 10;
export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(15,15,15)',
  },
  scroll: {
    paddingHorizontal: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    padding: 10,
    borderWidth: 3,
    borderColor: 'rgb(29,29,29)',
    backgroundColor: 'rgb(21,21,21)',
    alignItems: 'center',
    justifyContent: 'center',
    width: minWidthCard,
    height: minWidthCard,
    marginHorizontal: 2,
    marginVertical: 3,
    borderRadius: 10,
  },
  input: {
    margin: 10,
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
    color: '#d9e3f0',
  },
});

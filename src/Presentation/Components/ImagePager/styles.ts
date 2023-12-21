import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const imageHeight = width / 1.5;

export default StyleSheet.create({
  scrollView: {
    backgroundColor: '#121212',
    borderRadius: 10,
    width: '100%',
  },
  image: {
    width: width,
    height: imageHeight,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: 'white',
  },
});

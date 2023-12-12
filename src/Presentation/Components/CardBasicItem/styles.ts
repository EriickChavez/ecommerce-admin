import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const cardWidth = width * 0.4;
const cardHeight = cardWidth * 0.8;

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    width: cardWidth,
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    height: cardHeight - 10,
  },
  image: {
    width: cardWidth * 0.7,
    height: '100%',
  },
  tag: {
    position: 'absolute',
    backgroundColor: 'red',
    right: -10,
    top: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
  infoContainer: {
    paddingHorizontal: 5,
  },
  text: {
    paddingVertical: 2,
  },
  titleText: {
    fontWeight: '600',
  },
  titleStock: {
    fontWeight: '400',
  },
  titlePrice: {
    fontWeight: '500',
  },
});

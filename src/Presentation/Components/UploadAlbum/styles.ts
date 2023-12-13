import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('screen');

const contentWidth = width - width * 0.2;
const imageAlbumSize = contentWidth * 0.3;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: '5%',
  },
  albumContainer: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  actionAlbum: {
    flexDirection: 'row-reverse',
  },
  album: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imageAlbum: {
    width: imageAlbumSize,
    height: imageAlbumSize,
    borderRadius: 10,
  },
  title: {
    fontSize: RFValue(16),
  },
  actionText: {
    fontSize: RFValue(12),
  },
  imageContent: {
    margin: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

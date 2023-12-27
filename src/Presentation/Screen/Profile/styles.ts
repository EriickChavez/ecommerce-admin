import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('screen');

const imageSize = width * 0.3;
const imageMiddle = width * 0.5;
const contentMiddle = imageMiddle - width * 0.1;
const imageInMiddleContainer = contentMiddle - imageSize / 2;
const imageOverTop = -(imageSize / 2);
const spicerSize = imageSize / 2 + 30;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '20%',
    paddingHorizontal: '10%',
    backgroundColor: 'white',
  },
  content: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#F7FAFC',
  },
  topbar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row-reverse',
  },
  button: {
    padding: 5,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize,
  },
  imageContainer: {
    position: 'absolute',
    left: imageInMiddleContainer,
    top: imageOverTop,
  },
  spacer: {
    height: spicerSize,
  },
  divder: {
    marginTop: 10,
    width: '100%',
    height: 1,
    backgroundColor: 'red',
  },
  centerText: {
    textAlign: 'center',
  },
  contentBio: {
    borderWidth: 0,
  },
  textName: {
    fontSize: RFValue(24),
  },
  textFrom: {
    fontSize: RFValue(16),
  },
  bio: {
    fontSize: RFValue(12),
  },
  sellerBio: {
    padding: '5%',
    marginTop: '10%',
  },
});

import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

const cardSize = width * 0.4;

export default StyleSheet.create({
  container: {
    width: cardSize,
    height: cardSize,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
  },
});

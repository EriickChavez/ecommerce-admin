import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListColumnWrapper: {
    justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
  },
  textTitle: {
    fontSize: RFValue(12),
    fontWeight: 'bold',
  },
  textSeeAll: {
    fontSize: RFValue(10),
  },
  card: {
    marginVertical: 15,
  },
});

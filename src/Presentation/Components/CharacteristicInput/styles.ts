import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width: screenWidth} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8B96A5',
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  scroll: {
    paddingTop: 5,
  },
  containerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: '2%',
  },
  icon: {
    marginRight: '2%',
  },
  row: {
    flex: 1,
    borderWidth: 1,
  },
  modalHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalHeaderText: {
    fontSize: RFValue(15),
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: screenWidth * 0.8,
    padding: 20,
    borderRadius: 10,
  },
  containerInput: {
    marginVertical: 10,
  },
  chipCard: {
    marginRight: 5,
  },
});

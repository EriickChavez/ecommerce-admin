import {Dimensions, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');
const horizontalSpace = width * 0.1;
const modalWidth = width - horizontalSpace;

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: modalWidth,
    height: modalWidth,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    flex: 1,
  },
  buttonCancel: {
    backgroundColor: '#BF616A',
    marginRight: 5,
  },
  buttonConfirm: {
    backgroundColor: '#A3BE8C',
    marginLeft: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerModalItems: {
    flex: 1,
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  modalItems: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  modalItemCheck: {
    flex: 1,
  },
  checkbox: {
    alignItems: 'center',
  },
  modalItemTextContainer: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  modalItemText: {},
  modalText: {
    fontSize: RFValue(16),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  dropdownContainer: {
    flexDirection: 'row',
  },
  dropdownPicker: {
    paddingHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    backgroundColor: '#8B96A5',
  },
  dropPickerInput: {
    flex: 1,
  },
  dropPickerInputContent: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

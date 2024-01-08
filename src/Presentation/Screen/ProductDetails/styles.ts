import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  scroll: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: RFValue(16),
    fontWeight: 'bold',
  },
  icon: {
    padding: 5,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
  input: {
    marginVertical: 5,
  },
  image: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: RFValue(150),
    borderWidth: 1,
  },
  uploadImage: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: RFValue(150),
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#A3BE8C',
    borderWidth: 2,
    borderColor: '#93ae7c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: RFValue(13),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  // Estilos para el modal
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#007BFF', // Color del botón
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff', // Color del texto del botón
    fontWeight: 'bold',
  },
});

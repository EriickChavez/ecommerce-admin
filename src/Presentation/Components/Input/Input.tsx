import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from 'react-native';
import TextInput from '../TextInput/TextInput';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {INPUT_TYPE} from '../../../Enum/Inputs';

interface InputProps {
  placeholder?: string;
  type: INPUT_TYPE;
  value: string;
  title?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = INPUT_TYPE.TEXT,
  value,
  title,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const isEditable = useMemo(
    () => type === INPUT_TYPE.TEXT || type === INPUT_TYPE.NUMBER,
    [type],
  );
  const isPicker = useMemo(() => type === INPUT_TYPE.PICKER, [type]);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);
  const onPress = useCallback(() => {
    if (isPicker) {
      openModal();
    }
  }, [isPicker, openModal]);
  const keyboardType = useMemo(() => {
    if (type === INPUT_TYPE.NUMBER) {
      return 'numeric';
    }
  }, [type]);

  const TxInput = useCallback(() => {
    return (
      <TextInput
        TextInputProps={{
          editable: isEditable,
          placeholder,
          value,
          onChangeText: () => {},
          keyboardType,
        }}
        rightIcon={<ArrowDown2 size={RFValue(12)} variant="Bold" />}
      />
    );
  }, [isEditable, placeholder, value, keyboardType]);

  const PickerInput = useCallback(() => {
    return (
      <TouchableOpacity onPress={onPress}>
        <>
          <TextInput
            TextInputProps={{
              editable: false,
              placeholder,
              value,
            }}
            rightIcon={<ArrowDown2 size={RFValue(12)} variant="Bold" />}
          />
        </>
      </TouchableOpacity>
    );
  }, [onPress, placeholder, value]);

  return (
    <View>
      {title && <Text>{title}</Text>}
      {isEditable ? <TxInput /> : <PickerInput />}

      {modalVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

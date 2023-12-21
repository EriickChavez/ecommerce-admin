import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import TextInput from '../TextInput/TextInput';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PickerItem, PickerOptions, TextOptions} from '../../../@Types/picker';
import injectionSort from '../../../Utils/sort';
import Text from '../Text/Text';

interface InputProps {
  placeholder?: string;
  type?: INPUT_TYPE;
  value?: string;
  title?: string;
  onChangeText?: (text: string) => void;
  pickerOptions?: PickerOptions;
  textOptions?: TextOptions;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = INPUT_TYPE.TEXT,
  value,
  title,
  onChangeText,
  pickerOptions = {
    pickerOptions: {
      onPickerSelectOption: () => {},
      data: [],
      setPickerArraySelected: () => {},
      pickerArraySelected: [],
    },
  },
  textOptions = {
    textOptions: {
      contextMenuHidden: false,
    },
  },
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const isEditable = useMemo(
    () => type === INPUT_TYPE.TEXT || type === INPUT_TYPE.NUMBER,
    [type],
  );
  const isPicker = useMemo(() => type === INPUT_TYPE.PICKER, [type]);
  const isDropDown = useMemo(() => type === INPUT_TYPE.DROPDOWN, [type]);

  const openModal = useCallback(() => {
    setModalVisible(true);
  }, []);
  const onPress = useCallback(() => {
    if (isPicker || isDropDown) {
      openModal();
    }
  }, [isPicker, openModal, isDropDown]);

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
          onChangeText,
          keyboardType,
          contextMenuHidden: textOptions.textOptions.contextMenuHidden,
        }}
      />
    );
  }, [
    isEditable,
    placeholder,
    value,
    onChangeText,
    keyboardType,
    textOptions.textOptions.contextMenuHidden,
  ]);

  const PickerInput = useCallback(() => {
    return (
      <TouchableOpacity onPress={onPress}>
        <>
          <TextInput
            TextInputProps={{
              editable: false,
              placeholder,
              value: pickerOptions.pickerOptions.pickerArraySelected
                .map(i => i.label)
                .join(', '),
            }}
            rightIcon={<ArrowDown2 size={RFValue(12)} variant="Bold" />}
          />
        </>
      </TouchableOpacity>
    );
  }, [onPress, pickerOptions.pickerOptions.pickerArraySelected, placeholder]);

  const DropDownInput = useCallback(() => {
    return (
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.dropdownPicker}>
            <Text>MN</Text>
            <ArrowDown2 size={RFValue(12)} variant="Bold" color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.dropPickerInput}>
          <TextInput
            borderRadius={styles.dropPickerInputContent}
            TextInputProps={{
              editable: true,
              placeholder,
              value,
              onChangeText,
            }}
          />
        </View>
      </View>
    );
  }, [onPress, placeholder, value, onChangeText]);

  const onCheckboxPress = (item: PickerItem) => {
    if (pickerOptions.pickerOptions.pickerArraySelected.includes(item)) {
      const newArray = pickerOptions.pickerOptions.pickerArraySelected.filter(
        i => i !== item,
      );
      pickerOptions.pickerOptions.setPickerArraySelected(newArray);
      pickerOptions.pickerOptions.onPickerSelectOption(newArray);
    } else {
      const newArray = injectionSort(
        pickerOptions.pickerOptions.pickerArraySelected,
        item,
        'id',
      );
      pickerOptions.pickerOptions.setPickerArraySelected(newArray);
      pickerOptions.pickerOptions.onPickerSelectOption(newArray);
    }
  };
  const renderCheckItems = ({
    item,
    index,
  }: {
    item: PickerItem;
    index: number;
  }) => {
    const isChecked = pickerOptions.pickerOptions.pickerArraySelected.some(
      i => i.id === item.id,
    );

    return (
      <View key={`key-checkbox-${index}`} style={styles.modalItems}>
        <View style={styles.modalItemCheck}>
          <BouncyCheckbox
            onPress={() => onCheckboxPress(item)}
            isChecked={isChecked}
            style={styles.checkbox}
            size={RFValue(15)}
            text={item.label}
          />
        </View>
      </View>
    );
  };

  const onPressCancel = useCallback(() => {
    setModalVisible(false);
  }, []);
  const onPressOk = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <View>
      {title && <Text>{title}</Text>}
      {isEditable && <TxInput />}
      {isPicker && <PickerInput />}
      {isDropDown && <DropDownInput />}

      {modalVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>
                <ScrollView style={styles.containerModalItems}>
                  {pickerOptions.pickerOptions.data.map((item, index) => {
                    return renderCheckItems({item, index});
                  })}
                </ScrollView>
                <View style={styles.buttonContainer}>
                  <Pressable
                    style={[styles.button, styles.buttonCancel]}
                    onPress={onPressCancel}>
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buttonConfirm]}
                    onPress={onPressOk}>
                    <Text style={styles.textStyle}>Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      )}
    </View>
  );
};

export default Input;

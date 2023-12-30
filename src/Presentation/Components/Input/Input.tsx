import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {View, Pressable, Modal, ScrollView} from 'react-native';
import TextInput from './TextInput';
import {RFValue} from 'react-native-responsive-fontsize';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {PickerItem, PickerOptions, TextOptions} from '../../../@Types/picker';
import injectionSort from '../../../Utils/sort';
import Text from '../Text/Text';
import PickerInput from './PickerInput';
import DropDown from './DropDown';
import {TextInputRef} from '../TextInput/TextInput';

interface InputProps {
  placeholder?: string;
  type?: INPUT_TYPE;
  value?: string;
  title?: string;
  onChangeText?: (text: string) => void;
  pickerOptions?: PickerOptions;
  textOptions?: TextOptions;
}
export interface inputRef {
  focus: () => void;
  blur: () => void;
  isFocused: () => boolean;
}

const Input = forwardRef<inputRef, InputProps>(
  (
    {
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
          multiple: true,
        },
      },
      textOptions = {
        textOptions: {
          contextMenuHidden: false,
          error: false,
          editable: true,
        },
      },
    },
    ref,
  ) => {
    const checkBoxRef = React.useRef<
      Array<React.MutableRefObject<BouncyCheckbox | null>>
    >(
      Array.from({length: pickerOptions.pickerOptions.data.length}, () =>
        React.createRef<BouncyCheckbox | null>(),
      ),
    );
    const textInputRef = React.useRef<TextInputRef>(null);

    useImperativeHandle(ref, () => ({
      blur: () => {
        textInputRef?.current?.blur();
      },
      focus: () => {
        textInputRef.current?.focus();
      },
      isFocused: () => {
        if (textInputRef?.current) {
          return textInputRef?.current?.isFocused();
        }
        return false;
      },
    }));

    const [modalVisible, setModalVisible] = useState(false);
    const isEditable = useMemo(
      () =>
        type === INPUT_TYPE.TEXT ||
        type === INPUT_TYPE.PASSWORD ||
        type === INPUT_TYPE.NUMBER,
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
              ref={checkBoxRef.current[index]}
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
        {isEditable && (
          <TextInput
            ref={textInputRef}
            isEditable={isEditable && textOptions.textOptions.editable}
            onChangeText={onChangeText}
            placeholder={placeholder}
            textOptions={textOptions}
            type={type}
            value={value}
          />
        )}
        {isPicker && (
          <PickerInput
            onPress={onPress}
            pickerOptions={pickerOptions}
            placeholder={placeholder}
          />
        )}
        {isDropDown && (
          <DropDown
            onChangeText={onChangeText}
            onPress={onPress}
            placeholder={placeholder}
            value={value}
          />
        )}

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
  },
);

export default Input;

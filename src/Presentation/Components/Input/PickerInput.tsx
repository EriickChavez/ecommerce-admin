import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextInput from '../TextInput/TextInput';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PickerOptions} from '../../../@Types/picker';

interface PickerInputProps {
  onPress?: () => void;
  placeholder?: string;
  pickerOptions?: PickerOptions;
}

const PickerInput: React.FC<PickerInputProps> = ({
  onPress,
  pickerOptions = {
    pickerOptions: {
      onPickerSelectOption: () => {},
      data: [],
      setPickerArraySelected: () => {},
      pickerArraySelected: [],
      multiple: true,
    },
  },
  placeholder = '',
}) => {
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
};

export default PickerInput;

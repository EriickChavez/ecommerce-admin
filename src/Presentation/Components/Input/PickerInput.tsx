import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextInput from '../TextInput/TextInput';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {PickerOptions} from '../../../@Types/picker';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface PickerInputProps {
  theme?: ThemeEntry;
  onPress?: () => void;
  placeholder?: string;
  pickerOptions?: PickerOptions;
}

const PickerInput: React.FC<PickerInputProps> = ({
  theme = themes.light,
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
          theme={theme}
          TextInputProps={{
            editable: false,
            placeholder,
            value: pickerOptions.pickerOptions.pickerArraySelected
              .map(i => i.label)
              .join(', '),
          }}
          rightIcon={
            <ArrowDown2
              size={RFValue(12)}
              variant="Bold"
              color={theme.dark ? theme.colors.text : theme.colors.primary}
            />
          }
        />
      </>
    </TouchableOpacity>
  );
};

export default PickerInput;

import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import TextInput from './TextInput';
import Text from '../Text/Text';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface DropDownProps {
  theme: ThemeEntry;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const DropDown: React.FC<DropDownProps> = ({
  onChangeText = () => {},
  placeholder = '',
  value = '',
  onPress = () => {},
  theme = themes.light,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.dropdownPicker,
            {
              backgroundColor: theme.colors.border,
            },
          ]}>
          <Text style={{color: theme.colors.text}}>MN</Text>
          <ArrowDown2 size={RFValue(12)} variant="Bold" color="white" />
        </View>
      </TouchableOpacity>
      <View style={styles.dropPickerInput}>
        <TextInput
          theme={theme}
          borderRadius={styles.dropPickerInputContent}
          isEditable={true}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default DropDown;

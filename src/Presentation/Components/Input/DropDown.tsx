import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ArrowDown2} from 'iconsax-react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import TextInput from './TextInput';

interface DropDownProps {
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
}) => {
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

import React from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import {NewCategoryScreenNavigationProps} from '../../../@Types/navigation.settings';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import Text from '../../Components/Text/Text';
import styles from './styles';

const NewCategory: React.FC<NewCategoryScreenNavigationProps> = ({}) => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>New Category</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <Input type={INPUT_TYPE.TEXT} title="Category Name" />
        </View>
        <View style={styles.input}>
          <ExpandableTextInput
            text="Description"
            containerStyle={styles.ExpandableTextInput}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewCategory;

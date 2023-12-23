import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {NewBannerScreenNavigationProps} from '../../../@Types/navigation.settings';
import styles from './styles';
import Input from '../../Components/Input/Input';
import {ALL_SCREENS, INPUT_TYPE} from '../../../Enum';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import Text from '../../Components/Text/Text';
const NewBannerScreen: React.FC<NewBannerScreenNavigationProps> = ({}) => {
  const [showIn, setShowIn] = useState<string>('');

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.input}>
          <Input
            title="Banner Title"
            placeholder="Banner Title"
            type={INPUT_TYPE.TEXT}
          />
        </View>

        <View style={styles.input}>
          <ExpandableTextInput
            containerStyle={styles.containerInput}
            placeholder="Descripción"
            text="Descripción"
          />
        </View>
        <Input
          title="Where to show"
          type={INPUT_TYPE.PICKER}
          pickerOptions={{
            pickerOptions: {
              multiple: false,
              data: ALL_SCREENS.map(item => {
                return {label: item, value: item, id: item};
              }),
              onPickerSelectOption: data => {
                setShowIn(data[0].label);
              },
              pickerArraySelected: [{label: showIn, value: showIn, id: showIn}],
              setPickerArraySelected: data => {
                setShowIn(data[0].label);
              },
            },
          }}
        />
        <UploadAlbum title="Images" />
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewBannerScreen;

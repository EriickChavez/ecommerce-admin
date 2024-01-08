import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Input from '../../Components/Input/Input';
import {ALL_SCREENS, INPUT_TYPE, ITEMS, SCREEN_NAME} from '../../../Enum';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import UploadAlbum from '../../Components/UploadAlbum/UploadAlbum';
import Text from '../../Components/Text/Text';
import {NewBannerScreenNavigationProps} from '../../../@Types/navigation.newProduct';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
const NewBannerScreen: React.FC<NewBannerScreenNavigationProps> = ({
  navigation,
}) => {
  const theme = useTheme() as ThemeEntry;
  const [showIn, setShowIn] = useState<string>('');
  const [album, setAlbum] = useState(['', '', '', '', '', '']);

  return (
    <SceneView>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.header}>
            <Text style={[styles.title, {color: theme.colors.text}]}>
              {LocalizationService.addBanner.title}
            </Text>
          </View>
          <View style={styles.input}>
            <Input
              theme={theme}
              title={LocalizationService.input.bannerTitle}
              placeholder={LocalizationService.input.bannerTitle}
              type={INPUT_TYPE.TEXT}
            />
          </View>
          <View style={styles.input}>
            <ExpandableTextInput
              theme={theme}
              containerStyle={styles.containerInput}
              placeholder={LocalizationService.input.description}
              text={LocalizationService.input.description}
            />
          </View>
          <Input
            theme={theme}
            title={LocalizationService.input.showIn}
            type={INPUT_TYPE.PICKER}
            placeholder={LocalizationService.input.showIn}
            pickerOptions={{
              pickerOptions: {
                multiple: false,
                data: ALL_SCREENS.map(item => {
                  return {label: item, value: item, id: item};
                }),
                onPickerSelectOption: data => {
                  setShowIn(data[0].label);
                },
                pickerArraySelected: [
                  {label: showIn, value: showIn, id: showIn},
                ],
                setPickerArraySelected: data => {
                  setShowIn(data[0].label);
                },
              },
            }}
          />
          <UploadAlbum
            theme={theme}
            title={LocalizationService.addBanner.bannerImages}
            album={album}
            onChangeAlbum={data => {
              setAlbum(data);
            }}
          />
        </ScrollView>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN, {
                item: ITEMS.BANNER,
              })
            }>
            <Text style={[styles.buttonText]}>
              {LocalizationService.button.save}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SceneView>
  );
};

export default NewBannerScreen;

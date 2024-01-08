import React, {useMemo, useState} from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import {NewCategoryScreenNavigationProps} from '../../../@Types/navigation.newProduct';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum/Inputs';
import ExpandableTextInput from '../../Components/ExpandibleTextInput/ExpandibleTextInput';
import Text from '../../Components/Text/Text';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import {fetchAddCategory} from '../../../Infrastructure/Store/Actions/CategoryAction';
import {categorySelector} from '../../../Infrastructure/Store/Slice/CategorySlice';
import {PickerItem} from '../../../@Types/picker';
import UploadImage from '../../Components/UploadImage/UploadImage';
import {SCREEN_NAME} from '../../../Enum/Screens';
import {ITEMS} from '../../../Enum';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';

const NewCategory: React.FC<NewCategoryScreenNavigationProps> = ({
  navigation,
}) => {
  const theme = useTheme() as ThemeEntry;
  const userState = useSelector(userSelector);
  const categoryState = useSelector(categorySelector);

  const [pickerArraySelected, setPickerArraySelected] = useState<PickerItem[]>(
    [],
  );
  const [imageCover, setImageCover] = useState<string | undefined>();

  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [relatedCategoriesIds, setRelatedCategoriesIds] = useState<string[]>(
    [],
  );
  const dispatch = useDispatch();
  const resetInputs = () => {
    setName('');
    setDescription('');
    setPickerArraySelected([]);
    setImageCover(undefined);
  };
  const onPress = () => {
    dispatch(
      // @ts-ignore
      fetchAddCategory({
        token: userState.user.token,
        category: {
          name,
          description,
          relatedCategories: relatedCategoriesIds,
          imageCover,
        },
      }),
    );
    resetInputs();
    navigation.navigate(SCREEN_NAME.CONFIRMATION_SCREEN, {
      item: ITEMS.CATEGORY,
    });
  };
  const categoryData = useMemo(() => {
    try {
      const catdat = categoryState.data.map(cty => {
        return {
          label: cty.name,
          value: cty.name,
          id: cty.id,
        };
      });
      return catdat;
    } catch (err) {
      return [];
    }
  }, [categoryState]);

  return (
    <SceneView>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <Text style={[styles.title, {color: theme?.colors.text}]}>
            {LocalizationService.addCategory.title}
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.input}>
            <UploadImage
              theme={theme}
              title={LocalizationService.addCategory.cover}
              onChangeImage={setImageCover}
              src={imageCover}
              containerStyle={styles.uploadImage}
            />
          </View>
          <View style={styles.input}>
            <Input
              theme={theme}
              type={INPUT_TYPE.TEXT}
              title={LocalizationService.input.categoryName}
              placeholder={LocalizationService.input.categoryName}
              value={name}
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.input}>
            <ExpandableTextInput
              theme={theme}
              placeholder={LocalizationService.input.description}
              text={LocalizationService.input.description}
              onChangeText={text => setDescription(text)}
              value={description}
              containerStyle={styles.ExpandableTextInput}
            />
          </View>
          <View style={styles.input}>
            <Input
              theme={theme}
              type={INPUT_TYPE.PICKER}
              placeholder={LocalizationService.input.relatedCategories}
              title={LocalizationService.input.relatedCategories}
              pickerOptions={{
                pickerOptions: {
                  data: categoryData,
                  onPickerSelectOption: (itemValue: PickerItem[]) => {
                    const ids: string[] = itemValue.map(i => i.id);
                    setRelatedCategoriesIds(ids);
                  },
                  pickerArraySelected,
                  setPickerArraySelected,
                },
              }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={[styles.buttonText, {color: theme?.colors.text}]}>
            {LocalizationService.button.save}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SceneView>
  );
};

export default NewCategory;

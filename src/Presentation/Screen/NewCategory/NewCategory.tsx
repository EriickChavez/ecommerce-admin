import React, {useState} from 'react';
import {TouchableOpacity, View, ScrollView} from 'react-native';
import {NewCategoryScreenNavigationProps} from '../../../@Types/navigation.settings';
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

const NewCategory: React.FC<NewCategoryScreenNavigationProps> = ({
  navigation,
}) => {
  const userState = useSelector(userSelector);
  const categoryState = useSelector(categorySelector);

  const [pickerArraySelected, setPickerArraySelected] = useState<PickerItem[]>(
    [],
  );
  const [imageCover, setImageCover] = useState<string | undefined>();

  const [name, setName] = useState<string>('Camera');
  const [description, setDescription] = useState<string>(
    'Camera Sony bien bonita',
  );
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

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <Text style={styles.title}>New Category</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.input}>
          <Input
            type={INPUT_TYPE.TEXT}
            title="Category Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.input}>
          <ExpandableTextInput
            text="Description"
            onChangeText={text => setDescription(text)}
            value={description}
            containerStyle={styles.ExpandableTextInput}
          />
        </View>
        <View style={styles.input}>
          <UploadImage
            title="Cover"
            onChangeImage={setImageCover}
            src={imageCover}
            containerStyle={styles.uploadImage}
          />
        </View>
        <View style={styles.input}>
          <Input
            type={INPUT_TYPE.PICKER}
            title="Related Categories"
            options={{
              pickerOptions: {
                data: categoryState.data.map((cty): PickerItem => {
                  return {
                    label: cty.name,
                    value: cty.name,
                    id: cty.id,
                  };
                }),
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
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default NewCategory;

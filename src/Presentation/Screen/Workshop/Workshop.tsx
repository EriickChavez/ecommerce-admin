import React, {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import UploadImage from '../../Components/UploadImage/UploadImage';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum';
import {ThemeEntry} from '../../../@Types/theme';
import styles from './styles';
import LargeButton from '../../Components/LargeButton/LargeButton';
import LocalizationService from '../../../Utils/LocalizationService';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import {createWorkshopAction} from '../../../Infrastructure/Store/Actions/WorkshopActions';

interface WorkshopProps {
  theme: ThemeEntry;
}

const Workshop: React.FC<WorkshopProps> = ({theme}) => {
  const {user} = useSelector(userSelector);
  const [src, setSrc] = useState('');
  const [name, setName] = useState('Tienda');
  const [description, setDescription] = useState('Description');
  const dispatch = useDispatch();
  const onSubmit = () => {
    dispatch(
      // @ts-ignore
      createWorkshopAction({
        token: user.token,
        userId: user.id,
        workshop: {
          name,
          description,
          imageUri: src,
          adminId: user.id,
        },
      }),
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: theme.colors.card}]}>
      <View
        style={[styles.container, {backgroundColor: theme.colors.background}]}>
        <ScrollView bounces={false}>
          <View style={styles.input}>
            <UploadImage
              title={LocalizationService.workshop.uploadImage}
              theme={theme}
              containerStyle={[
                {
                  backgroundColor: theme.colors.card,
                },
                styles.image,
              ]}
              resizeMode="contain"
              onChangeImage={setSrc}
              src={src}
            />
          </View>
          <View style={styles.input}>
            <Input
              title={LocalizationService.workshop.name}
              type={INPUT_TYPE.TEXT}
              placeholder={LocalizationService.workshop.name}
              theme={theme}
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.input}>
            <Input
              title={LocalizationService.workshop.description}
              type={INPUT_TYPE.TEXT}
              placeholder={LocalizationService.workshop.description}
              theme={theme}
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </ScrollView>
        <LargeButton
          onPress={onSubmit}
          title={LocalizationService.workshop.createWorkshop}
        />
      </View>
    </SafeAreaView>
  );
};

export default Workshop;

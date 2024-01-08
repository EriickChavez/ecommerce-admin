import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import ExpandableText from '../../Components/ExpandibleText/ExpandibleText';
import Text from '../../Components/Text/Text';
import ImageView from '../../Components/ImageView/ImageView';
import {ProfileScreenScreenNavigationProps} from '../../../@Types/navigation.settings';
import {Edit} from 'iconsax-react-native';
import {SCREEN_NAME} from '../../../Enum';
import {useSelector} from 'react-redux';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import {Config} from '../../../Config/ENV';
import SceneView from '../../Components/SceneView/SceneView';
import {ThemeEntry} from '../../../@Types/theme';
import {useTheme} from '@react-navigation/native';

const ProfileScreen: React.FC<ProfileScreenScreenNavigationProps> = ({
  navigation,
}) => {
  const theme = useTheme() as ThemeEntry;
  const {user} = useSelector(userSelector);

  const onEdit = () => {
    navigation.navigate(SCREEN_NAME.EDIT_PROFILE_SCREEN);
  };

  return (
    <SceneView>
      <>
        <View style={styles.topbar}>
          <TouchableOpacity style={styles.button} onPress={onEdit}>
            <Edit
              variant={'Bold'}
              color={theme.dark ? theme.colors.text : theme.colors.primary}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.container,
            {backgroundColor: theme.colors.background},
          ]}>
          <View
            style={[styles.content, {backgroundColor: theme.colors.border}]}>
            <View style={styles.imageContainer}>
              <ImageView
                imageProps={{
                  source: {uri: Config.BASE_URI_PROFILE_IMAGE + user.imageUri},
                  style: styles.image,
                }}
              />
            </View>
            <View style={styles.spacer} />
            <View style={styles.sellerBio}>
              <Text
                style={[
                  styles.centerText,
                  styles.textName,
                  {color: theme.colors.text},
                ]}>
                {user.username}, {user.age}
              </Text>
              <Text
                style={[
                  styles.centerText,
                  styles.textFrom,
                  {color: theme.colors.text},
                ]}>
                {user.state}, {user.country}
              </Text>
              <View style={styles.divder} />
              <ExpandableText
                theme={theme}
                containerStyle={styles.contentBio}
                textStyle={[styles.bio, styles.centerText]}
                text={user.bio}
              />
            </View>
            <View style={styles.spacer} />
          </View>
        </View>
      </>
    </SceneView>
  );
};

export default ProfileScreen;

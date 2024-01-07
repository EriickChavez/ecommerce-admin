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

const ProfileScreen: React.FC<ProfileScreenScreenNavigationProps> = ({
  navigation,
}) => {
  const {user} = useSelector(userSelector);

  const onEdit = () => {
    navigation.navigate(SCREEN_NAME.EDIT_PROFILE_SCREEN);
  };

  console.log('user.imageUri', user.imageUri);
  return (
    <SceneView>
      <>
        <View style={styles.topbar}>
          <TouchableOpacity style={styles.button} onPress={onEdit}>
            <Edit />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={[styles.content]}>
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
              <Text style={[styles.centerText, styles.textName]}>
                {user.username}, {user.age}
              </Text>
              <Text style={[styles.centerText, styles.textFrom]}>
                {user.state}, {user.country}
              </Text>
              <View style={styles.divder} />
              <ExpandableText
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

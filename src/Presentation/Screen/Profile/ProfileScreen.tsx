import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import styles from './styles';
import ExpandableText from '../../Components/ExpandibleText/ExpandibleText';
import Text from '../../Components/Text/Text';
import ImageView from '../../Components/ImageView/ImageView';
import {ProfileScreenScreenNavigationProps} from '../../../@Types/navigation.settings';
import {Edit} from 'iconsax-react-native';
import {SCREEN_NAME} from '../../../Enum';

const fakeText =
  'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam pariatur unde! Beatae obcaecati fuga est magni suscipit minima, molestiae perspiciatis porro, mollitia vel expedita accusantium repellat commodi quam nostrum?';

const ProfileScreen: React.FC<ProfileScreenScreenNavigationProps> = ({
  navigation,
}) => {
  const onEdit = () => {
    navigation.navigate(SCREEN_NAME.EDIT_PROFILE_SCREEN);
  };

  return (
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
                source: {uri: 'https://picsum.photos/200/300'},
                style: styles.image,
              }}
            />
          </View>
          <View style={styles.spacer} />
          <View style={styles.sellerBio}>
            <Text style={[styles.centerText, styles.textName]}>
              Jessica Jones, 27
            </Text>
            <Text style={[styles.centerText, styles.textFrom]}>
              San Francisco, USA
            </Text>
            <View style={styles.divder} />
            <ExpandableText
              containerStyle={styles.contentBio}
              textStyle={[styles.bio, styles.centerText]}
              text={fakeText}
            />
          </View>
          <View style={styles.spacer} />
        </View>
      </View>
    </>
  );
};

export default ProfileScreen;

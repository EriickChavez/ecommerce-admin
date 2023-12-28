import {Notification} from 'iconsax-react-native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import ImageView from '../ImageView/ImageView';
import Text from '../Text/Text';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';

const Topbar: React.FC<BottomTabHeaderProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;
  const {user} = useSelector(userSelector);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageView
          imageProps={{style: styles.imageContainer, resizeMode: 'contain'}}
        />
      </View>

      <View style={styles.userContainer}>
        <Text style={[styles.greetings, {color: theme.colors.text_secondary}]}>
          Welcome Back,
        </Text>
        <Text style={[styles.username, {color: theme.colors.text}]}>
          {user.username}
        </Text>
      </View>

      <View
        style={[
          styles.imageContainer,
          styles.notificationContainer,
          {backgroundColor: theme.colors.placeholder},
        ]}>
        <Notification color={theme.colors.text_negative} />
      </View>
    </SafeAreaView>
  );
};

export default Topbar;

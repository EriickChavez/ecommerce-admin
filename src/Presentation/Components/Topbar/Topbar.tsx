import {Notification} from 'iconsax-react-native';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import ImageView from '../ImageView/ImageView';
import Text from '../Text/Text';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';

interface TopbarProps {}

const Topbar: React.FC<TopbarProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;

  return (
    <View style={styles.container}>
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
          Erick Chavez
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
    </View>
  );
};

export default Topbar;

import * as Icon from 'iconsax-react-native';
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {RFValue} from 'react-native-responsive-fontsize';
import themes from '../../../Themes/themes';
import {ThemeEntry} from '../../../@Types/theme';

interface CharacteristicProps {
  icon: string;
  title: string;
  description: string;
  theme?: ThemeEntry;
}
const Characteristic: React.FC<CharacteristicProps> = ({
  description,
  icon,
  title,
  theme = themes.light,
}) => {
  // @ts-ignore
  const IconToUse: Icon.Icon = Icon[icon];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <IconToUse size={RFValue(14)} color={theme?.colors.text} />
        <Text style={[styles.text, styles.title, {color: theme?.colors.text}]}>
          {title}:
        </Text>
      </View>
      <Text
        style={[styles.text, styles.description, {color: theme?.colors.text}]}>
        {description}
      </Text>
    </View>
  );
};

export default Characteristic;

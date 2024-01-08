import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Category} from '../../../Domain/Entity';
import Text from '../Text/Text';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';

interface CategoryCardProps {
  category: Category;
  theme: ThemeEntry;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category = {
    name: '',
  },
  theme = themes.light,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.border,
        },
      ]}>
      <Text style={[styles.text, {color: theme.colors.text}]}>
        {category.name}
      </Text>
    </View>
  );
};

export default CategoryCard;

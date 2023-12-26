import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {Category} from '../../../Domain/Entity';
import Text from '../Text/Text';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category = {
    name: 'Sony',
  },
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

export default CategoryCard;

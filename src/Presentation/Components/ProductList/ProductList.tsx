import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Text from '../Text/Text';
import CardBasicItem from '../CardBasicItem/CardBasicItem';
import styles from './styles';

interface ProductListProps {
  title?: string;
  data?: [];
  action?: {
    onPress?: () => void;
    text?: string;
  };
}

const ProductList: React.FC<ProductListProps> = ({
  title = 'My Product',
  action = {
    onPress: () => {},
    text: '',
  },
}) => {
  const renderItem = () => {
    return (
      <View style={styles.card}>
        <CardBasicItem />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textTitle}>{title}</Text>
        {action && (
          <TouchableOpacity onPress={action.onPress}>
            <Text style={styles.textSeeAll}>{action.text}</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        numColumns={2}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
        columnWrapperStyle={styles.flatListColumnWrapper}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;

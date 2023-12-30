import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Text from '../Text/Text';
import CardBasicItem from '../CardBasicItem/CardBasicItem';
import styles from './styles';
import {Product} from '../../../Domain/Entity';

interface ProductListProps {
  title?: string;
  data?: Product[];
  onPressCard?: (item: Product) => void;
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
  data = [],
  onPressCard = () => {},
}) => {
  const renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <View style={styles.card} key={`key-${index}-${item.id}`}>
        <CardBasicItem
          product={item}
          onPress={() => onPressCard(data[index])}
        />
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
        data={data}
        columnWrapperStyle={styles.flatListColumnWrapper}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;

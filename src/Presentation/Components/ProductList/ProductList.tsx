import React from 'react';
import {View, FlatList} from 'react-native';
import Text from '../Text/Text';
import CardBasicItem from '../CardBasicItem/CardBasicItem';
import styles from './styles';

interface ProductListProps {
  title: string;
  data?: [];
}

const ProductList: React.FC<ProductListProps> = ({title = 'My Product'}) => {
  const renderItem = () => {
    return (
      <View style={styles.card}>
        <CardBasicItem />
      </View>
    );
  };

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.textTitle}>{title}</Text>
        <Text style={styles.textSeeAll}>See all</Text>
      </View>
      <FlatList
        numColumns={2}
        data={[1, 2, 3, 4, 5, 6]}
        columnWrapperStyle={styles.flatListColumnWrapper}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;

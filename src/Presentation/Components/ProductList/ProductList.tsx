import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Text from '../Text/Text';
import CardBasicItem from '../CardBasicItem/CardBasicItem';
import styles from './styles';
import {Product} from '../../../Domain/Entity';
import {ThemeEntry} from '../../../@Types/theme';
import themes from '../../../Themes/themes';
import EmptyList from '../EmptyList/EmptyList';

interface ProductListProps {
  title?: string;
  data?: Product[];
  onPressCard?: (item: Product) => void;
  action?: {
    onPress?: () => void;
    text?: string;
  };
  theme?: ThemeEntry;
}

const ProductList: React.FC<ProductListProps> = ({
  title = 'My Product',
  action = {
    onPress: () => {},
    text: '',
  },
  data = [],
  onPressCard = () => {},
  theme = themes.light,
}) => {
  const renderItem = ({item, index}: {item: Product; index: number}) => {
    return (
      <View style={styles.card} key={`key-${index}-${item.id}`}>
        <CardBasicItem
          theme={theme}
          product={item}
          onPress={() => onPressCard(data[index])}
        />
      </View>
    );
  };

  const ListEmptyComponent = () => {
    return (
      <View style={styles.empty}>
        <EmptyList />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.textTitle, {color: theme.colors.text}]}>
          {title}
        </Text>
        {action && (
          <TouchableOpacity onPress={action.onPress}>
            <Text style={[styles.textSeeAll, {color: theme.colors.text}]}>
              {action.text}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        numColumns={2}
        data={data}
        columnWrapperStyle={styles.flatListColumnWrapper}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default ProductList;

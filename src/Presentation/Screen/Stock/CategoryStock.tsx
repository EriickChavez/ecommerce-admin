import React from 'react';
import {FlatList, View} from 'react-native';
import {CategoryStockScreenNavigationProps} from '../../../@Types/navigation.settings';
import styles from './styles';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import TextInput from '../../Components/TextInput/TextInput';
import {SearchNormal} from 'iconsax-react-native';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
import {Category} from '../../../Domain/Entity';

const CategoryStock: React.FC<CategoryStockScreenNavigationProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;

  const renderItem = ({index, item}: {index: number; item: Category}) => {
    return (
      <View key={index} style={styles.categoryCard}>
        <CategoryCard category={item} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            TextInputProps={{placeholder: 'Search', editable: true}}
            leftIcon={<SearchNormal color={theme.colors.text} />}
          />
        </View>
        <FlatList
          columnWrapperStyle={styles.columnWrapperStyle}
          renderItem={renderItem}
          keyExtractor={({id}) => id}
          data={[]}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default CategoryStock;

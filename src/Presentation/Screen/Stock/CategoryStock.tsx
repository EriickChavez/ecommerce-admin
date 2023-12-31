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
import {useSelector} from 'react-redux';
import {categorySelector} from '../../../Infrastructure/Store/Slice/CategorySlice';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';

const CategoryStock: React.FC<CategoryStockScreenNavigationProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;
  const {data = []} = useSelector(categorySelector);
  const renderItem = ({index, item}: {index: number; item: Category}) => {
    return (
      <View key={index} style={styles.categoryCard}>
        <CategoryCard theme={theme} category={item} />
      </View>
    );
  };
  return (
    <SceneView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.input}>
            <TextInput
              theme={theme}
              TextInputProps={{
                placeholder: LocalizationService.input.search,
                editable: true,
              }}
              leftIcon={<SearchNormal color={theme.colors.text} />}
            />
          </View>
          <FlatList
            columnWrapperStyle={styles.columnWrapperStyle}
            renderItem={renderItem}
            keyExtractor={({id}) => id}
            data={data}
            numColumns={2}
          />
        </View>
      </View>
    </SceneView>
  );
};

export default CategoryStock;

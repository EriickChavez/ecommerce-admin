import React from 'react';
import {View} from 'react-native';
import TextInput from '../../Components/TextInput/TextInput';
import {SearchNormal} from 'iconsax-react-native';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import ProductList from '../../Components/ProductList/ProductList';
import useHome from '../../../Hook/useHome';
import {HomeScreenNavigationProps} from '../../../@Types/navigation.inventory';

const HomeScreen: React.FC<HomeScreenNavigationProps> = props => {
  const {theme} = useHome(props);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewContainer}>
          <TextInput
            TextInputProps={{placeholder: 'Search', editable: true}}
            leftIcon={<SearchNormal color={theme.colors.text} />}
          />
        </View>
        <ImagePager
          imageStyles={styles.banner}
          images={['https://picsum.photos/200/300']}
        />
      </View>
      <ProductList />
    </View>
  );
};

export default HomeScreen;

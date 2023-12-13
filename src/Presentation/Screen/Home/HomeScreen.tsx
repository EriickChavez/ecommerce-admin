import React from 'react';
import {View} from 'react-native';
import {HomeScreenNavigationProps} from '../../../@Types/navigation';
import TextInput from '../../Components/TextInput/TextInput';
import {SearchNormal} from 'iconsax-react-native';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import ProductList from '../../Components/ProductList/ProductList';
import useHome from '../../../Hook/useHome';

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
          images={[
            'https://yt3.googleusercontent.com/Eo-ns4GaYmA_LqdKqmTYWxQjMdETJ2ml2yuwmqfnsBRwx7_-xiozAIW570wm0Maj34WtkiOCYw=s900-c-k-c0x00ffffff-no-rj',
          ]}
        />
      </View>
      <ProductList />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {View} from 'react-native';
import {HomeScreenNavigationProps} from '../../../@Types/navigation';
import TextInput from '../../Components/TextInput/TextInput';
import Topbar from '../../Components/Topbar/Topbar';
import {SearchNormal} from 'iconsax-react-native';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import ProductList from '../../Components/ProductList/ProductList';

const HomeScreen: React.FC<HomeScreenNavigationProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Topbar />
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

import React, {useEffect} from 'react';
import {View} from 'react-native';
import TextInput from '../../Components/TextInput/TextInput';
import {SearchNormal} from 'iconsax-react-native';
import ImagePager from '../../Components/ImagePager/ImagePager';
import styles from './styles';
import ProductList from '../../Components/ProductList/ProductList';
import useHome from '../../../Hook/useHome';
import {HomeScreenNavigationProps} from '../../../@Types/navigation.inventory';
import {useDispatch, useSelector} from 'react-redux';
import {productSelector} from '../../../Infrastructure/Store/Slice/ProductSlice';
import {fetchProductsByUserId} from '../../../Infrastructure/Store/Actions/ProductAction';
import {userSelector} from '../../../Infrastructure/Store/Slice/UserSlice';
import {Product} from '../../../Domain/Entity';
import {SCREEN_NAME} from '../../../Enum';

const HomeScreen: React.FC<HomeScreenNavigationProps> = props => {
  const {theme} = useHome(props);
  const userState = useSelector(userSelector);
  const productState = useSelector(productSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      // @ts-ignore
      fetchProductsByUserId({
        token: userState.user.token,
        userId: userState.user.id,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onPressCard = (item: Product) => {
    props.navigation.navigate(SCREEN_NAME.PRODUCT_DETAILS_SCREEN, {item});
  };

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
      <ProductList onPressCard={onPressCard} data={productState.products} />
    </View>
  );
};

export default HomeScreen;

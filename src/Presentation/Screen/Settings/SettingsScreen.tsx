import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import {SettingsScreenNavigationProps} from '../../../@Types/navigation.settings';
import styles from './styles';
import Text from '../../Components/Text/Text';
import * as Icon from 'iconsax-react-native';
import {SettingsButtonList} from '../../../Constants/SettingsList';
import {RFValue} from 'react-native-responsive-fontsize';
import ImageView from '../../Components/ImageView/ImageView';
import {IMAGE_TYPE} from '../../../Enum/Image';
import {SCREEN_NAME} from '../../../Enum/Screens';
import UserSlice, {
  userSelector,
} from '../../../Infrastructure/Store/Slice/UserSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Config} from '../../../Config/ENV';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';

const SettingsScreen: React.FC<SettingsScreenNavigationProps> = ({
  navigation,
}) => {
  const {user} = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <SceneView>
      <View style={styles.container}>
        <ScrollView bounces={false} style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <ImageView
              imageType={IMAGE_TYPE.AVATAR}
              imageProps={{
                style: styles.image,
                source: {uri: Config.BASE_URI_PROFILE_IMAGE + user.imageUri},
              }}
            />
            <View style={styles.textcontainer}>
              <Text style={styles.username}>{user.username}</Text>
            </View>
          </View>
          {SettingsButtonList.map((item, index) => {
            const IconLeftToUse: Icon.Icon = item.leftIcon
              ? // @ts-ignore
                Icon[item.leftIcon]
              : null;
            // @ts-ignore
            const IconRightToUse: Icon.Icon = item.rightIcon
              ? // @ts-ignore
                Icon[item.rightIcon]
              : null;

            return (
              <TouchableOpacity
                onPress={() => {
                  if (item.name === LocalizationService.settings.Categories) {
                    navigation.navigate(SCREEN_NAME.CATEGORY_STOCK_SCREEN);
                  } else if (
                    item.name === LocalizationService.settings.Banner
                  ) {
                  } else if (
                    item.name === LocalizationService.settings.Products
                  ) {
                    navigation.navigate(SCREEN_NAME.PRODUCT_STOCK_SCREEN);
                  } else if (
                    item.name === LocalizationService.settings.Profile
                  ) {
                    navigation.navigate(SCREEN_NAME.PROFILE_SCREEN);
                  } else if (
                    item.name === LocalizationService.settings.Logout
                  ) {
                    dispatch(UserSlice.actions.resetState());
                  }
                }}
                style={styles.button}
                key={`${index}`}>
                <View style={styles.buttonContainer}>
                  {item.leftIcon && (
                    <View style={styles.icon}>
                      <IconLeftToUse size={RFValue(16)} />
                    </View>
                  )}
                  <View style={styles.textButtonContainer}>
                    <Text style={styles.textButton}>{item.name}</Text>
                  </View>
                  {item.rightIcon && (
                    <View style={styles.icon}>
                      <IconRightToUse size={RFValue(16)} />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SceneView>
  );
};

export default SettingsScreen;

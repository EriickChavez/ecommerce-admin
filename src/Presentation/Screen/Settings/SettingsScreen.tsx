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

const SettingsScreen: React.FC<SettingsScreenNavigationProps> = ({
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView bounces={false} style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <ImageView
            imageType={IMAGE_TYPE.AVATAR}
            imageProps={{
              style: styles.image,
            }}
          />
          <View style={styles.textcontainer}>
            <Text style={styles.username}>John Doe</Text>
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
                if (index === 0) {
                  navigation.navigate(SCREEN_NAME.NEW_CATEGORY_SCREEN);
                } else if (item.name === 'Banner') {
                  navigation.navigate(SCREEN_NAME.NEW_BANNER_SCREEN);
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
  );
};

export default SettingsScreen;

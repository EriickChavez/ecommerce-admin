import React, {useMemo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import OkIcon from '../../../Assets/svg/OkIcon';
import {ConfirmNavigationProps} from '../../../@Types/navigation.newProduct';
import {SCREEN_NAME} from '../../../Enum/Screens';
import styles from './styles';
import SceneView from '../../Components/SceneView/SceneView';
import LocalizationService from '../../../Utils/LocalizationService';
import {ITEMS} from '../../../Enum';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';

const Confirmation: React.FC<ConfirmNavigationProps> = ({
  navigation,
  route,
}) => {
  const theme = useTheme() as ThemeEntry;
  const {item} = route.params;
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.SELECT_ITEM_SCREEN}],
    });
  };
  const textMessage = useMemo(() => {
    if (item === ITEMS.PRODUCT) {
      return LocalizationService.confirmation.confirmationProduct;
    } else if (item === ITEMS.CATEGORY) {
      return LocalizationService.confirmation.confirmationCategory;
    } else {
      return '';
    }
  }, [item]);

  return (
    <SceneView>
      <View style={styles.container}>
        <View style={styles.check}>
          <OkIcon width={50} height={50} stroke="white" />
        </View>
        <View style={styles.separator} />

        <View>
          <Text style={[styles.title, styles.text, {color: theme.colors.text}]}>
            {LocalizationService.confirmation.titleCongratulations}
          </Text>
          <Text
            style={[styles.subtitle, styles.text, {color: theme.colors.text}]}>
            {textMessage}
          </Text>
        </View>
        <View style={styles.separator} />
        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.colors.success}]}
          onPress={handlePress}>
          <Text style={[styles.buttonText, {color: theme.colors.text}]}>
            {LocalizationService.button.continue}
          </Text>
        </TouchableOpacity>
      </View>
    </SceneView>
  );
};

export default Confirmation;

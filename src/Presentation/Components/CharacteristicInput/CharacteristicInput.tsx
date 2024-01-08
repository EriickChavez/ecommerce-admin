import React, {useMemo, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
  Alert,
} from 'react-native';
import Text from '../Text/Text';
import styles from './styles';
import {Add, Archive} from 'iconsax-react-native';
import Input from '../Input/Input';
import * as Icon from 'iconsax-react-native';
import {iconNameArray} from '../../../Constants/iconName';
import {capitalizeFirstLetter} from '../../../Utils/textUtils';
import {Characteristics} from '../../../Domain/Entity';
import HelpIcon from '../../../Assets/svg/Help';
import Chips from '../Chips/Chips';
import {IconsTypes} from '../../../@Types/icon';
import {RFValue} from 'react-native-responsive-fontsize';
import LocalizationService from '../../../Utils/LocalizationService';
import themes from '../../../Themes/themes';
import {ThemeEntry} from '../../../@Types/theme';

interface CharacteristicInputProps {
  theme?: ThemeEntry;
  goToHelpIconScreen?: () => void;
  options?: {
    characteristics?: Characteristics[];
    addCharacteristics?: (data: Characteristics) => void;
    onRemoveItem?: (data: Characteristics) => void;
  };
}

const CharacteristicInput: React.FC<CharacteristicInputProps> = ({
  goToHelpIconScreen = () => {},
  options = {
    characteristics: [],
    addCharacteristics: () => {},
    onRemoveItem: () => {},
  },
  theme = themes.light,
}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [icon, setIcon] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onOpen = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onRemoveItem = (item: Characteristics) => {
    options.onRemoveItem && options.onRemoveItem(item);
  };
  const handleFormSubmit = () => {
    if (!icon || !title || !description) {
      Alert.alert(
        LocalizationService.error.error,
        LocalizationService.error.allFieldsRequired,
      );
      return;
    } else {
      options.addCharacteristics &&
        options.addCharacteristics({
          description,
          icon,
          title,
        });
    }
    onClose();
  };

  const IconSelected: React.FC<Icon.IconProps> = useMemo(() => {
    if (iconNameArray.includes(capitalizeFirstLetter(icon))) {
      return Icon[icon as keyof typeof Icon];
    }
    return Archive;
  }, [icon]);

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
          },
        ]}>
        <TouchableOpacity onPress={onOpen}>
          <View style={styles.input}>
            <Add
              style={[styles.icon]}
              color={theme.dark ? theme.colors.text : theme.colors.primary}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpen} style={[styles.input, styles.flex1]}>
          <Text
            style={[styles.input, styles.flex1, {color: theme.colors.text}]}>
            {LocalizationService.input.characteristic.addCharacteristic}
          </Text>
        </TouchableOpacity>
        <View style={styles.input}>
          <TouchableOpacity onPress={goToHelpIconScreen}>
            <HelpIcon
              style={[styles.icon]}
              color={theme.dark ? theme.colors.text : theme.colors.primary}
            />
          </TouchableOpacity>
        </View>

        {isVisible && (
          <Modal
            visible={isVisible}
            animationType="fade"
            onRequestClose={onClose}
            style={styles.modal}
            transparent>
            <View style={styles.modal}>
              <View
                style={[
                  styles.modalContent,
                  {backgroundColor: theme.colors.background},
                ]}>
                <View style={styles.modalHeader}>
                  <Text
                    style={[
                      styles.modalHeaderText,
                      {color: theme.colors.text},
                    ]}>
                    {LocalizationService.input.characteristic.modalTitle}
                  </Text>
                </View>
                <View style={[styles.containerInput, styles.containerIcons]}>
                  <View>
                    <IconSelected
                      style={[styles.icon]}
                      color={
                        theme.dark ? theme.colors.text : theme.colors.primary
                      }
                    />
                  </View>
                  <View style={styles.flex1}>
                    <Input
                      theme={theme}
                      placeholder={
                        LocalizationService.input.characteristic.icon
                      }
                      value={icon}
                      textOptions={{
                        textOptions: {contextMenuHidden: true, editable: true},
                      }}
                      onChangeText={text =>
                        setIcon(capitalizeFirstLetter(text))
                      }
                    />
                  </View>
                </View>
                <View style={styles.containerInput}>
                  <Input
                    theme={theme}
                    title={LocalizationService.input.characteristic.title}
                    placeholder={LocalizationService.input.characteristic.title}
                    value={title}
                    onChangeText={text => setTitle(text)}
                  />
                </View>
                <View style={styles.containerInput}>
                  <Input
                    theme={theme}
                    title={LocalizationService.input.characteristic.description}
                    placeholder={
                      LocalizationService.input.characteristic.description
                    }
                    value={description}
                    onChangeText={text => setDescription(text)}
                  />
                </View>

                <Button
                  title={LocalizationService.button.add}
                  onPress={handleFormSubmit}
                />
                <Button
                  title={LocalizationService.button.cancel}
                  onPress={onClose}
                />
              </View>
            </View>
          </Modal>
        )}
      </View>
      <ScrollView
        horizontal
        style={styles.scroll}
        showsHorizontalScrollIndicator={false}>
        {options.characteristics?.map((item, index) => (
          <View key={index} style={[styles.chipCard]}>
            <Chips
              text={`${item.title} - ${item.description}`}
              leftIcon={icon as IconsTypes}
              options={{
                fontSize: RFValue(8),
                onIconRightPress: () => onRemoveItem(item),
                leftIconColor: theme.dark
                  ? theme.colors.text
                  : theme.colors.primary,
                rightIconColor: theme.dark
                  ? theme.colors.text
                  : theme.colors.primary,
                backgroundColor: theme.colors.background,
                textColor: theme.colors.text,
                borderColor: theme.colors.border,
              }}
              rightIcon="MinusCirlce"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CharacteristicInput;

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

interface CharacteristicInputProps {
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
      Alert.alert('Error', 'All fields are required');
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
      <View style={styles.container}>
        <TouchableOpacity onPress={onOpen}>
          <View style={styles.input}>
            <Add style={[styles.icon]} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onOpen} style={[styles.input, styles.flex1]}>
          <Text style={[styles.input, styles.flex1]}>Add Characteristic</Text>
        </TouchableOpacity>
        <View style={styles.input}>
          <TouchableOpacity onPress={goToHelpIconScreen}>
            <HelpIcon style={[styles.icon]} />
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
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>
                    Formulario de Características
                  </Text>
                </View>
                <View style={[styles.containerInput, styles.containerIcons]}>
                  <View>
                    <IconSelected style={[styles.icon]} />
                  </View>
                  <View style={styles.flex1}>
                    <Input
                      placeholder="Icono"
                      value={icon}
                      textOptions={{textOptions: {contextMenuHidden: true}}}
                      onChangeText={text =>
                        setIcon(capitalizeFirstLetter(text))
                      }
                    />
                  </View>
                </View>
                <View style={styles.containerInput}>
                  <Input
                    title="Título"
                    placeholder="Título"
                    value={title}
                    onChangeText={text => setTitle(text)}
                  />
                </View>
                <View style={styles.containerInput}>
                  <Input
                    title="Descripción"
                    placeholder="Descripción"
                    value={description}
                    onChangeText={text => setDescription(text)}
                  />
                </View>

                <Button title="Agregar" onPress={handleFormSubmit} />
                <Button title="Cancelar" onPress={onClose} />
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

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import OkIcon from '../../../Assets/svg/OkIcon';
import {ConfirmNavigationProps} from '../../../@Types/navigation.newProduct';
import {SCREEN_NAME} from '../../../Enum/Screens';
import styles from './styles';

const Confirmation: React.FC<ConfirmNavigationProps> = ({navigation}) => {
  const handlePress = () => {
    navigation.reset({
      index: 0,
      routes: [{name: SCREEN_NAME.ADD_PRODUCT_SCREEN}],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.check}>
        <OkIcon width={50} height={50} stroke="white" />
      </View>
      <View style={styles.separator} />

      <View>
        <Text style={[styles.title, styles.text]}>Congratulations</Text>
        <Text style={[styles.subtitle, styles.text]}>
          Your product has been added to your {'\n'} portfolio kindly check your
          email for more details
        </Text>
      </View>
      <View style={styles.separator} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Confirmation;

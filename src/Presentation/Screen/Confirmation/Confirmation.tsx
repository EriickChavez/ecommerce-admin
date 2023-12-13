import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Text from '../../Components/Text/Text';
import OkIcon from '../../../Assets/svg/OkIcon';
import {lightColors} from '../../../Themes/colors';
import {ConfirmNavigationProps} from '../../../@Types/navigation';
import {SCREEN_NAME} from '../../../Enum/Screens';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  check: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: lightColors.danger,
  },
  text: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontWeight: '500',
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: '90%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  separator: {
    height: 25,
  },
});

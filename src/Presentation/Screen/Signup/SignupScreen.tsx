import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';

import styles from './styles';

import {Logo} from '../../Components/LogoComponent';
import useSignup from '../../../Hook/useSignup';
import {SignupNavigationProps} from '../../../@Types/navigation.auth';
import LocalizationService from '../../../Utils/LocalizationService';

const SignUpScreen: React.FC<SignupNavigationProps> = props => {
  const {handleLogin, handleSignup, onChange} = useSignup(props);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{LocalizationService.signUp.title}</Text>
        </View>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Logo width={'100%'} height={'100%'} />
          </View>
        </View>
        <TextInput
          style={styles.input}
          value={onChange.username}
          onChangeText={onChange.setUsername}
          placeholder={LocalizationService.signUp.username}
        />
        <TextInput
          style={styles.input}
          value={onChange.email}
          onChangeText={onChange.setEmail}
          placeholder={LocalizationService.signUp.email}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          value={onChange.password}
          onChangeText={onChange.setPassword}
          placeholder={LocalizationService.signUp.password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginRedirectText}>
            {LocalizationService.signUp.alreadyHaveAccount}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

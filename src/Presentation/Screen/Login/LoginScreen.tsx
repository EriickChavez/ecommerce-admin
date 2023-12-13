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
import {LoginNavigationProps} from '../../../@Types/navigation';
import {Logo} from '../../Components/LogoComponent';
import styles from './styles';
import useLogin from '../../../Hook/useLogin';

const LoginScreen: React.FC<LoginNavigationProps> = props => {
  const {handleForgotPassword, handleLogin, handleSignUp, onChange} =
    useLogin(props);

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Iniciar sesión</Text>
        </View>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Logo width={'100%'} height={'100%'} />
          </View>
        </View>
        <TextInput
          style={styles.input}
          value={onChange.email}
          onChangeText={onChange.setEmail}
          placeholder="Nombre de usuario"
        />
        <TextInput
          style={styles.input}
          value={onChange.password}
          onChangeText={onChange.setPassword}
          placeholder="Contraseña"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Registrarse</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

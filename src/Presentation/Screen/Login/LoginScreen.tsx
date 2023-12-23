import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {LoginNavigationProps} from '../../../@Types/navigation.auth';
import {Logo} from '../../Components/LogoComponent';
import styles from './styles';
import useLogin from '../../../Hook/useLogin';
import Input from '../../Components/Input/Input';
import {INPUT_TYPE} from '../../../Enum';
import ShakeView from '../../../Animations/ShakeView';

const LoginScreen: React.FC<LoginNavigationProps> = props => {
  const {handleForgotPassword, handleLogin, handleSignUp, onChange, error} =
    useLogin(props);
  console.log(error);
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
        <View style={[styles.input]}>
          <ShakeView Angle={10} Time={1000}>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="email"
              onChangeText={onChange.setEmail}
              value={onChange.email}
              textOptions={{
                textOptions: {
                  error: error === 4,
                },
              }}
            />
          </ShakeView>
        </View>
        <View style={[styles.input]}>
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder="Password"
            onChangeText={onChange.setPassword}
            value={onChange.password}
          />
        </View>

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

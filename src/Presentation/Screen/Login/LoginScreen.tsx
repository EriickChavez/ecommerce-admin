import React, {createRef, useEffect} from 'react';
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
import {ShakeViewRef} from '../../../@Types/ref';
import {ERROR_CODE} from '../../../Enum/Error_message';

const LoginScreen: React.FC<LoginNavigationProps> = props => {
  const shakeEmailRef = createRef<ShakeViewRef>();
  const shakePasswordRef = createRef<ShakeViewRef>();

  const {handleForgotPassword, handleLogin, handleSignUp, onChange, error} =
    useLogin(props);

  useEffect(() => {
    console.log({error});
    if (error === ERROR_CODE.EMAIL_FORMAT) {
      shakeEmailRef?.current?.startShake();
    }
    if (error === ERROR_CODE.PASSWORD_INCORRECT) {
      shakePasswordRef?.current?.startShake();
    }
    if (error === ERROR_CODE.PASSWORD_FORMAT) {
      shakePasswordRef?.current?.startShake();
    }
  }, [error, shakeEmailRef, shakePasswordRef]);

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
          <ShakeView Angle={0.5} ref={shakeEmailRef}>
            <Input
              type={INPUT_TYPE.TEXT}
              placeholder="email"
              onChangeText={onChange.setEmail}
              value={onChange.email}
              textOptions={{
                textOptions: {
                  error: error === ERROR_CODE.EMAIL_FORMAT,
                },
              }}
            />
          </ShakeView>
        </View>
        <View style={[styles.input]}>
          <ShakeView Angle={0.5} ref={shakePasswordRef}>
            <Input
              type={INPUT_TYPE.PASSWORD}
              placeholder="Password"
              onChangeText={onChange.setPassword}
              value={onChange.password}
              textOptions={{
                textOptions: {
                  error:
                    error === ERROR_CODE.PASSWORD_FORMAT ||
                    error === ERROR_CODE.PASSWORD_INCORRECT,
                },
              }}
            />
          </ShakeView>
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

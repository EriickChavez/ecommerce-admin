import {useState} from 'react';
import {LoginNavigationProps} from '../@Types/navigation';
import {useDispatch} from 'react-redux';
import {SCREEN_NAME} from '../Enum/Screens';

interface loginHook {
  onChange: {
    email: string;
    password: string;
    setEmail: (name: string) => void;
    setPassword: (name: string) => void;
  };
  handleSignUp: () => void;
  handleForgotPassword: () => void;
  handleLogin: () => void;
}

const useLogin = ({navigation}: LoginNavigationProps): loginHook => {
  const [email, setEmail] = useState('erick@ch.com');
  const [password, setPassword] = useState('A1234567.');

  const dispatch = useDispatch();
  const handleSignUp = () => {
    navigation.navigate(SCREEN_NAME.SIGNUP_SCREEN);
  };
  const handleLogin = () => {};
  const handleForgotPassword = () => {
    console.log(`Iniciando sesión con el usuario: ${email}`);
  };

  return {
    handleForgotPassword,
    handleLogin,
    handleSignUp,
    onChange: {
      email,
      password,
      setEmail,
      setPassword,
    },
  };
};
export default useLogin;

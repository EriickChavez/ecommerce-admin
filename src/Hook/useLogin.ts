import {useState} from 'react';
import {LoginNavigationProps} from '../@Types/navigation.auth';
import {useDispatch} from 'react-redux';
import {SCREEN_NAME} from '../Enum/Screens';
import {fetchLogin} from '../Infrastructure/Store/Actions/UserAction';

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
  const handleLogin = () => {
    // @ts-ignore
    dispatch(fetchLogin({email, password}));
  };
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

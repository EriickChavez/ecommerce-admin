import {useEffect, useState} from 'react';
import {LoginNavigationProps} from '../@Types/navigation.auth';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN_NAME} from '../Enum/Screens';
import {fetchLogin} from '../Infrastructure/Store/Actions/UserAction';
import {userSelector} from '../Infrastructure/Store/Slice/UserSlice';
import {ERROR_CODE, ERROR_MESSAGE} from '../Enum/Error_message';

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
  error: number;
}

const useLogin = ({navigation}: LoginNavigationProps): loginHook => {
  const userState = useSelector(userSelector);
  const [email, setEmail] = useState('erick@ch.com');
  const [password, setPassword] = useState('A1234567.');
  const [error, setError] = useState<string | null | undefined>(undefined);

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
  const errorManager = () => {
    switch (error) {
      case ERROR_MESSAGE.INTERNAL_SERVER_ERROR:
        return ERROR_CODE.INTERNAL_SERVER_ERROR;
      case ERROR_MESSAGE.NOT_FOUND:
        return ERROR_CODE.NOT_FOUND;
      case ERROR_MESSAGE.PASSWORD_INCORRECT:
        return ERROR_CODE.PASSWORD_INCORRECT;
      case ERROR_MESSAGE.USER_ALREADY_EXISTS:
        return ERROR_CODE.USER_ALREADY_EXISTS;
      case ERROR_MESSAGE.USER_NOT_FOUND:
        return ERROR_CODE.USER_NOT_FOUND;
      case ERROR_MESSAGE.PASSWORD_FORMAT:
        return ERROR_CODE.PASSWORD_FORMAT;
      case ERROR_MESSAGE.EMAIL_FORMAT:
        return ERROR_CODE.EMAIL_FORMAT;
      default:
        return ERROR_CODE.INTERNAL_SERVER_ERROR;
    }
  };
  useEffect(() => {
    setError(userState.error);
  }, [userState.error]);

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
    error: errorManager(),
  };
};
export default useLogin;

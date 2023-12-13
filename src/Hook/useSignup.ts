import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SCREEN_NAME} from '../Enum/Screens';
import {SignupNavigationProps} from '../@Types/navigation';

interface signupHook {
  onChange: {
    email: string;
    password: string;
    username: string;
    setUsername: (name: string) => void;
    setEmail: (name: string) => void;
    setPassword: (name: string) => void;
  };
  handleSignup: () => void;
  handleLogin: () => void;
}

const useSignup = ({navigation}: SignupNavigationProps): signupHook => {
  const [email, setEmail] = useState('John@ch.com');
  const [password, setPassword] = useState('A1234567.');
  const [username, setUsername] = useState('John Doe');

  const dispatch = useDispatch();
  const handleLoginRedirect = useCallback(() => {
    navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
  }, [navigation]);

  const handleSignup = useCallback(() => {
    // @ts-ignore
    // dispatch(fetchSignUp({user: {email, password, username}}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, email, password, username]);

  return {
    handleLogin: handleLoginRedirect,
    handleSignup,
    onChange: {
      email,
      username,
      password,
      setEmail,
      setPassword,
      setUsername,
    },
  };
};
export default useSignup;

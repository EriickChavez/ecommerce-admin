import {useState, useEffect} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

interface keyboardHook {
  isKeyboardVisible: boolean;
  keyboardHeight: number;
}
export const useKeyboardVisible = (): keyboardHook => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [keyboardHeight, setKeyboardHeight] = useState<number>(0);
  const onKeyboardDidShow = (e: KeyboardEvent) => {
    setKeyboardHeight(e.endCoordinates.height);
  };

  const onKeyboardDidHide = () => {
    setKeyboardHeight(0);
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      e => {
        onKeyboardDidShow(e);
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
        onKeyboardDidHide();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return {isKeyboardVisible, keyboardHeight};
};

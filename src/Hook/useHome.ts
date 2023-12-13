import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../@Types/theme';
import {HomeScreenNavigationProps} from '../@Types/navigation';

interface HomeHook {
  theme: ThemeEntry;
}
export const useHome = ({}: HomeScreenNavigationProps): HomeHook => {
  const theme = useTheme() as ThemeEntry;

  return {
    theme,
  };
};

export default useHome;

import React from 'react';
import LottieView from 'lottie-react-native';
import Text from '../Text/Text';
import {useTheme} from '@react-navigation/native';
import {ThemeEntry} from '../../../@Types/theme';
import styles from './styles';

interface EmptyListProps {}

const EmptyList: React.FC<EmptyListProps> = ({}) => {
  const theme = useTheme() as ThemeEntry;
  return (
    <>
      <LottieView
        source={require('../../../Assets/lotties/empty.json')}
        style={styles.lottie}
        autoPlay
        loop
      />
      <Text style={[{color: theme.colors.text}, styles.text]}>
        No hay productos
      </Text>
    </>
  );
};

export default EmptyList;

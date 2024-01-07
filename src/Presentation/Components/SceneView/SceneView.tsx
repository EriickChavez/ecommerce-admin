import React from 'react';
import {View} from 'react-native';
import styles from './styles';

interface SceneViewProps {
  children: React.ReactNode | React.ReactNode[];
}

const SceneView: React.FC<SceneViewProps> = ({children}) => {
  return (
    <>
      {children}
      <View style={styles.bottomSpace} />
    </>
  );
};

export default SceneView;

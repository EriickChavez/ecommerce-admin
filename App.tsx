import 'react-native-gesture-handler';
import React from 'react';
import AppProvider from './src/AppProvider';
import AppContainer from './src/AppContainer';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <AppProvider>
      <AppContainer />
    </AppProvider>
  );
};

export default App;

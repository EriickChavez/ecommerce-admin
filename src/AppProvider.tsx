import 'react-native-gesture-handler';
import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './Infrastructure/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';

interface RootProviderProps {
  children: ReactNode;
}
const AppProvider: React.FC<RootProviderProps> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default AppProvider;

import {
  combineReducers,
  // compose,
  configureStore,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import {reduxStorage} from '../../Config/storageConfig';
import ExampleSlice from './Slice/ExampleSlice';
import userSlice from './Slice/UserSlice';
import productSlice from './Slice/ProductSlice';
import CategorySlice from './Slice/CategorySlice';
import WorkshopSlice from './Slice/WorkshopSlice';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const rootReducer = combineReducers({
  example: ExampleSlice.reducer,
  user: userSlice.reducer,
  product: productSlice.reducer,
  category: CategorySlice.reducer,
  workshop: WorkshopSlice.reducer,
});

const middlewares = [thunk];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

middlewares.push(thunk);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: __DEV__, // Habilita DevTools en todas las situaciones
  middleware: middlewares,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

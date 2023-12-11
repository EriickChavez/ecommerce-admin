import {
  combineReducers,
  // compose,
  configureStore,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import thunk from 'redux-thunk';
import {reduxStorage} from '../../Config/storageConfig';
import ExampleSlice from './Slice/ExampleSlice';

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const rootReducer = combineReducers({
  example: ExampleSlice.reducer,
});

const middlewares = [thunk];

// let composeEnhancers = compose;

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

middlewares.push(thunk);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true, // Habilita DevTools en todas las situaciones
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
  // enhancer: composeEnhancers(applyMiddleware(thunk)),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

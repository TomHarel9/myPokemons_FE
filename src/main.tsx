import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import appStore from './slices/appSlice.ts';
import pokemonReducer from './slices/pokemonSlice';

const store = configureStore({
  reducer: {
    isLoading: appStore.isLoadingReducer,
    pokemon: pokemonReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import auth from './slices/auth';

const reducer = combineReducers({
  auth: auth.slice.reducer,
});

// @ts-ignore
export type AppState = ReturnType<typeof reducer>;

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;

export type AppThunkApiConfig = {
    // @ts-ignore
    state: AppState;
    dispatch: AppDispatch;
};

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
    isAuthed?: boolean;
    token?: string;
    userId?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    clientAuthed?: boolean;
}

const initialState: AuthState = {
  isAuthed: false,
  token: '',
  userId: '',
  email: '',
  firstName: '',
  lastName: '',
  clientAuthed: false,
};

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<Partial<AuthState>>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const actions = {
  ...slice.actions,
};

export default {
  slice,
  actions,
};

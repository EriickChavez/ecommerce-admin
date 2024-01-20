import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserView} from '../../../Domain/Entity/User/User';
import {defaultUser} from '../../../Constants/defaultValues';
import {fetchEditUser, fetchLogin, fetchSignup} from '../Actions/UserAction';
import {RootState} from '../Store';

interface UserSliceState {
  user: UserView;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: UserSliceState = {
  error: null,
  loading: false,
  user: defaultUser,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
    resetError: state => {
      state.error = initialState.error;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSignup.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSignup.fulfilled,
        (
          state,
          action: PayloadAction<{
            data: UserView;
          }>,
        ) => {
          const {data} = action.payload;
          state.loading = false;
          state.user = data;
        },
      )
      .addCase(fetchSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(fetchLogin.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        const {data} = action.payload;
        state.loading = false;
        // @ts-ignore
        state.error = data?.error;
        state.user = data;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(fetchEditUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchEditUser.fulfilled,
        (state, action: PayloadAction<{data: UserView | {error: string}}>) => {
          const {data} = action.payload;

          // @ts-ignore
          state.error = data?.error;
          const newUserData = {
            ...state.user,
            ...data,
          };
          state.user = newUserData;
          state.loading = false;
        },
      )
      .addCase(fetchEditUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default {
  reducer: userSlice.reducer,
  actions: userSlice.actions,
};

export const userSelector = (state: RootState) => state.user;

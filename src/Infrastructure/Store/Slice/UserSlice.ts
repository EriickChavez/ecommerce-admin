import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {UserView} from '../../../Domain/Entity/User/User';
import {defaultUser} from '../../../Constants/defaultValues';
import {fetchSignup} from '../Actions/UserAction';

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
          state.loading = false;
          state.user = action.payload.data;
        },
      )
      .addCase(fetchSignup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export const {resetState} = userSlice.actions;

export default {
  reducer: userSlice.reducer,
  actions: userSlice.actions,
};

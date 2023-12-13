import {createSlice} from '@reduxjs/toolkit';
import {UserView} from '../../../Domain/Entity/User/User';
import {defaultUser} from '../../../Constants/defaultValues';

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
});

export default {
  reducer: userSlice.reducer,
  actions: userSlice.actions,
};

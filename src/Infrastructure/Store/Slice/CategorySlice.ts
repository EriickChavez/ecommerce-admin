import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Category} from '../../../Domain/Entity';

interface CategorySliceState {
  data: Category[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CategorySliceState = {
  data: [],
  loading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder.addCase('', state => {});
    builder.addCase(
      '',
      (state, action: PayloadAction<{data: Category[]}>) => {},
    );
    builder.addCase('', state => {});
  },
});

export default {
  reducer: categorySlice.reducer,
  actions: categorySlice.actions,
};

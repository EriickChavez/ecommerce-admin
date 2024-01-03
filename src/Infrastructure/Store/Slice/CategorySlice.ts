import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Category} from '../../../Domain/Entity';
import {fetchAddCategory, fetchCategories} from '../Actions/CategoryAction';
import {RootState} from '../Store';

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
    resetError: state => {
      state.error = initialState.error;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<{data: Category[]}>) => {
          const {data} = action.payload;

          if (Array.isArray(data)) {
            state.data = data;
          }
          state.loading = false;
        },
      )
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.error.message || 'An error occurred';
        state.loading = false;
      });

    builder
      .addCase(fetchAddCategory.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAddCategory.fulfilled,
        (state, action: PayloadAction<{data: Category}>) => {
          const {data} = action.payload;
          const newArray = [...state.data, data];
          state.data = newArray;
          state.loading = false;
        },
      )
      .addCase(fetchAddCategory.rejected, (state, action) => {
        state.error = action.error.message || 'An error occurred';
        state.loading = false;
      });
  },
});

export default {
  reducer: categorySlice.reducer,
  actions: categorySlice.actions,
};

export const categorySelector = (state: RootState) => state.category;

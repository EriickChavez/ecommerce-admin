import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../Domain/Entity';
import {RootState} from '../Store';
import {defaultProduct} from '../../../Constants/defaultValues';
import {fetchPictureAlbum} from '../Actions/ProductAction';

interface ProductSliceState {
  products: Product[];
  loading: boolean;
  uploadProduct: {
    loading: boolean;
    error: string | null | undefined;
  };
  tmpProduct: Product;
  error?: string | null | undefined;
}

const initialState: ProductSliceState = {
  loading: false,
  products: [],
  tmpProduct: defaultProduct,
  uploadProduct: {
    loading: false,
    error: undefined,
  },
  error: undefined,
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
    setTmpProduct: (state, action: PayloadAction<{data: Product}>) => {
      const {data} = action.payload;
      state.tmpProduct = {...data};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPictureAlbum.pending, state => {
        state.uploadProduct.loading = true;
      })
      .addCase(fetchPictureAlbum.fulfilled, state => {
        state.uploadProduct.loading = false;
      })
      .addCase(fetchPictureAlbum.rejected, state => {
        state.uploadProduct.loading = false;
        state.uploadProduct.error = 'An error occurred';
      });
  },
});

export default {
  reducer: productSlice.reducer,
  actions: productSlice.actions,
};

export const productSelector = (state: RootState) => state.product;

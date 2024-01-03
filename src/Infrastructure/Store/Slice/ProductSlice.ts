import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../Domain/Entity';
import {RootState} from '../Store';
import {defaultProduct} from '../../../Constants/defaultValues';
import {
  fetchNewProducts,
  fetchPictureAlbum,
  fetchProductsByUserId,
} from '../Actions/ProductAction';

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
    resetError: state => {
      state.error = initialState.error;
    },
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

    builder
      .addCase(fetchProductsByUserId.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchProductsByUserId.fulfilled,
        (state, action: PayloadAction<{data: Product[]}>) => {
          const {data} = action.payload;
          state.products = data;
          state.loading = false;
        },
      )
      .addCase(fetchProductsByUserId.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      });

    builder
      .addCase(fetchNewProducts.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchNewProducts.fulfilled,
        (state, action: PayloadAction<{data: Product}>) => {
          const {data} = action.payload;
          const newProduct: Product = {
            ...defaultProduct,
            ...data,
          };
          state.products = [...state.products, newProduct];
          state.loading = false;
          state.tmpProduct = newProduct;
        },
      )
      .addCase(fetchNewProducts.rejected, state => {
        state.loading = false;
        state.error = 'An error occurred';
      });
  },
});

export default {
  reducer: productSlice.reducer,
  actions: productSlice.actions,
};

export const productSelector = (state: RootState) => state.product;

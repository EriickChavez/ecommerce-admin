import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../Domain/Entity';
import {RootState} from '../Store';
import {defaultProduct} from '../../../Constants/defaultValues';

interface ProductSliceState {
  products: Product[];
  loading: boolean;
  tmpProduct: Product;
  error?: string | null | undefined;
}

const initialState: ProductSliceState = {
  loading: false,
  products: [],
  tmpProduct: defaultProduct,
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
});

export default {
  reducer: productSlice.reducer,
  actions: productSlice.actions,
};

export const productSelector = (state: RootState) => state.product;

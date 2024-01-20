import CategorySlice from '../Infrastructure/Store/Slice/CategorySlice';
import ProductSlice from '../Infrastructure/Store/Slice/ProductSlice';
import UserSlice from '../Infrastructure/Store/Slice/UserSlice';

const resetError = (dispatch: any) => {
  dispatch(UserSlice.actions.resetError());
  dispatch(ProductSlice.actions.resetError());
  dispatch(CategorySlice.actions.resetError());

  dispatch(ProductSlice.actions.resetTmpProduct());
};

export {resetError};

import CategorySlice from '../Infrastructure/Store/Slice/CategorySlice';
import ProductSlice from '../Infrastructure/Store/Slice/ProductSlice';
import UserSlice from '../Infrastructure/Store/Slice/UserSlice';

const resetError = (dispatch: any) => {
  dispatch(UserSlice.actions.resetState());
  dispatch(ProductSlice.actions.resetState());
  dispatch(CategorySlice.actions.resetState());
};

export {resetError};

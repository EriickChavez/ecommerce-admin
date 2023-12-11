import {createSlice} from '@reduxjs/toolkit';

interface ExampleSliceState {
  test: string;
}

const initialState: ExampleSliceState = {
  test: 'test',
};

const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
});

export default {
  reducer: exampleSlice.reducer,
  actions: exampleSlice.actions,
};

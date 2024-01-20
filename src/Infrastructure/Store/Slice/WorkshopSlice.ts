import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Workshop} from '../../../Domain/Workshop/Workshop';
import {defaultWorkshop} from '../../../Constants/defaultValues';
import {RootState} from '../Store';
import {
  createWorkshopAction,
  fetchWorkshopAction,
} from '../Actions/WorkshopActions';

interface WorkshopSliceState {
  workshop: Workshop;
  loading: boolean;
  error: string | null;
}

const initialState: WorkshopSliceState = {
  workshop: defaultWorkshop,
  loading: false,
  error: null,
};

const workshopSlice = createSlice({
  name: 'workshopSlice',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createWorkshopAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createWorkshopAction.fulfilled,
        (state, action: PayloadAction<{data: Workshop}>) => {
          const {data} = action.payload;
          state.workshop = data;
          state.loading = false;
        },
      )
      .addCase(createWorkshopAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      })
      .addCase(fetchWorkshopAction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchWorkshopAction.fulfilled,
        (state, action: PayloadAction<{data: Workshop}>) => {
          const {data} = action.payload;
          state.workshop = data;
          state.loading = false;
        },
      )
      .addCase(fetchWorkshopAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

export default {
  reducer: workshopSlice.reducer,
  actions: workshopSlice.actions,
};

export const workshopSelector = (state: RootState) => state.workshop;

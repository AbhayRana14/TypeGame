import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'gameDetails',
  initialState: {
    deviceIp: {},
    isLoading: false,
  },
  reducers: {
    getGameHighestScoreAction: (state) => {
      state.isLoading = true;
    },
    saveGameHighestScoreAction: (state, action) => {
      state.deviceIp = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getGameHighestScoreAction, saveGameHighestScoreAction } = gameSlice.actions;
export default gameSlice.reducer;

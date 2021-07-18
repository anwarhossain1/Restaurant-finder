import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mapView: false,
  },
  reducers: {
    setMapView: (state, action) => {
      state.mapView = action.payload;
    },
  },
});

export const { setMapView } = userSlice.actions;
export const selectMapView = (state) => state.user.mapView;

export default userSlice.reducer;

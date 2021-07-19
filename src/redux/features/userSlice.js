import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    mapView: false,
    restaurantLatitude: 0,
    restaurantLongitude: 0,
  },
  reducers: {
    setMapView: (state, action) => {
      state.mapView = action.payload;
    },
    setRestaurantLatitude: (state, action) => {
      state.restaurantLatitude = action.payload;
    },
    setRestaurantLongitude: (state, action) => {
      state.restaurantLongitude = action.payload;
    },
  },
});

export const { setMapView, setRestaurantLatitude, setRestaurantLongitude } =
  userSlice.actions;
export const selectMapView = (state) => state.user.mapView;

export default userSlice.reducer;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMapView, setMapView } from "../redux/features/userSlice";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const MapView = (props) => {
  const mapView = useSelector(selectMapView);
  const dispatch = useDispatch();
  return (
    <div className="map" style={{ marginLeft: "20px" }}>
      <div className="back__button">
        <button onClick={() => dispatch(setMapView(false))}>Go Back</button>
      </div>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 23.781855942223235, lng: 90.40053478743839 }}
      >
        <Marker position={{ lat: props.latitude, lng: props.longitude }} />
      </GoogleMap>
      {console.log(mapView + `this is map view console`)}
    </div>
  );
};

export default withScriptjs(withGoogleMap(MapView));

//23.781855942223235, 90.40053478743839

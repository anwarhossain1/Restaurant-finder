import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const MapView = (props) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 23.781855942223235, lng: 90.40053478743839 }}
      >
        <Marker
          position={{ lat: 23.781855942223235, lng: 90.40053478743839 }}
        />
      </GoogleMap>
    </div>
  );
};

export default withScriptjs(withGoogleMap(MapView));

//23.781855942223235, 90.40053478743839

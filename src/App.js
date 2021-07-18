import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import MapView from "./pages/MapView";

function App() {
  return (
    <div className="App">
      <Home />
      <MapView
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?key="
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{ marginLeft: `10px`, marginRight: `10px`, height: `400px` }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;

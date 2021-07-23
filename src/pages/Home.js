import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import "./Home.css";
import MapView from "../components/MapView/MapView";
import map from "../assets/images/map.png";

import {
  setMapView,
  setRestaurantLatitude,
  setRestaurantLongitude,
} from "../redux/features/userSlice";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      searchedValue: "",
      name: "",
      searchInputError: false,
    };
  }
  componentDidMount() {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "MYPHEVZ2NPGXDKM4FTXVUKABFY32XC3QJ2SRWIVHAIMYH2K3",
      client_secret: "1XT4HBHRUBGFYJRQXB50B1IYXUO3QKE5WZ3TQKY2055QM2IM",
      ll: "23.782268354296054, 90.40035785396968",
      categoryId: "4d4b7105d754a06374d81259",
      radius: "3000",
      v: "20180323",
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then((response) => {
        this.setState({
          venues: response.data.response.groups[0].items,
        });
        console.log(response.data.response.groups[0].items);
        console.log(this.state.venues, "state data");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {!this.props.mapView ? (
          <div className="restaurant__main">
            <h1>Restaurant Finder</h1>
            <div>
              <input
                type="text"
                placeholder="Search Restaurants from Nearby"
                className="restaurant__search__field"
                onChange={(event) => {
                  this.setState({
                    searchedValue: event.target.value,
                  });
                }}
              />
            </div>
            {console.log(this.state.searchedValue)}
            <div className="restaurant__lists">
              <h2>Restaurants Near 3km of Monsterlab Bangladesh</h2>
              {this.state.venues
                .filter((val) => {
                  if (this.state.searchedValue === "") {
                    return val;
                  } else if (
                    val.venue.name
                      .toLowerCase()
                      .includes(this.state.searchedValue.toLocaleLowerCase())
                  ) {
                    return val;
                  } else {
                  }
                })
                .map((item, key) => {
                  return (
                    <div
                      key={item.id}
                      className="restaurant__list"
                      onClick={() => {
                        this.props.setMapView(true);
                        this.props.setRestaurantLatitude(
                          item.venue.location.lat
                        );
                        this.props.setRestaurantLongitude(
                          item.venue.location.lng
                        );
                        this.setState({
                          searchedValue: "",
                        });

                        console.log(
                          item.venue.name +
                            item.venue.location.address +
                            this.props.mapView
                        );
                      }}
                    >
                      Name:-{item.venue.name}
                      <br />
                      Address:-{item.venue.location.address}
                      <div className="map__icon">
                        <img src={map} />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          //console.log(this.props.latitude + " " + this.props.longitude)
          <MapView
            isMarkerShown
            googleMapURL="https://maps.googleapis.com/maps/api/js?key="
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  marginLeft: `20%`,
                  marginRight: `20%`,
                  marginTop: "50px",
                  height: `500px`,
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapView: state.user.mapView,
    latitude: state.user.restaurantLatitude,
    longitude: state.user.restaurantLongitude,
  };
};

export default connect(mapStateToProps, {
  setMapView,
  setRestaurantLatitude,
  setRestaurantLongitude,
})(Home);

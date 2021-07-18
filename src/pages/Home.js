import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import MapView from "./MapView";
import map from "../assets/images/map.png";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      click: true,
      searchedValue: "",
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
    const ListOnClickHandler = (e) => {
      console.log(e.item.id);
      // return (
      //   <div>
      //     {this.setState({
      //       click: false,
      //     })}
      //     <MapView
      //       isMarkerShown
      //       googleMapURL="https://maps.googleapis.com/maps/api/js?key="
      //       loadingElement={<div style={{ height: `100%` }} />}
      //       containerElement={
      //         <div
      //           style={{
      //             marginLeft: `10px`,
      //             marginRight: `10px`,
      //             height: `400px`,
      //           }}
      //         />
      //       }
      //       mapElement={<div style={{ height: `100%` }} />}
      //     />
      //   </div>
      // );
    };
    return (
      <div>
        {this.state.click ? (
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
                    alert("Please write a valid location");
                  }
                })
                .map((item, key) => {
                  return (
                    <div
                      key={item.id}
                      className="restaurant__list"
                      onClick={ListOnClickHandler}
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
          ""
        )}
      </div>
    );
  }
}

export default Home;

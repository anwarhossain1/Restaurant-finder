import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
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
        this is ane
        <div>
          <input type="text" placeholder="Search Restaurants from Nearby" />
        </div>
        <div>
          Restaurants Near 3km of Monsterlab Bangladesh
          {this.state.venues.map((item) => {
            return (
              <div key={item.id}>
                {item.venue.name}
                <br />
                {item.venue.location.address}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;

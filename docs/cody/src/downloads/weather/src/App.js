import React from "react";
import Weather from "./components/weather";
import Titles from "./components/titles";
import axios from "axios";

const Api_Key = "8d2de98e089f1c28e1a22fc19a24ef04";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  componentDidMount() {
    const city = "Toronto";
    const country = "Canada";
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`)
    .then((response) => {
      console.log(response);
      this.setState({
        temperature: response.data.main.temp,
        city: response.data.name,
        country: response.data.sys.country,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        error: ""
      })
    });
  }

  render() {
    return (
      <div>
         <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 form-container">
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;

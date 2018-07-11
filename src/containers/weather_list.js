import React, { Component } from "react";
import { connect } from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  renderWeather(cityData) {
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    //const {lon ,lat} =cityData.city.coord; ES6 way of saying find lon and lat from coord object and assign it to
    //object lon and lat
    return (
      <tr key={cityData.city.id}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
         <td>
           <Chart data={temps} color="orange" units="K" />
        </td>
        <td>
           <Chart data={pressures} color="blue" units="hPa"/>
        </td>
        <td>
           <Chart data={humidities} color="green" units="%"/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(cityData => this.renderWeather(cityData))}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);

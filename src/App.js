import React from "react";
import { fetchData } from "./api/";
import "./App.css";
import Header from "./components/Header/Header";

import { Cards, Chart, CountryPicker } from "./components";
class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <Header>
        <Cards
          data={data}
          country={country}
          selected={
            <CountryPicker handleCountryChange={this.handleCountryChange} />
          }
        />
        <Chart data={data} country={country} />
      </Header>
    );
  }
}
export default App;

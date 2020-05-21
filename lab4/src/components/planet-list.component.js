import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreatePlanet from "./create-edit-components/create-planet.component";


const Planet = props => (
  <tr>
    <td>{props.planet.planetname}</td>
    <td>{props.planet.stationname}</td>
    <td>{props.planet.capasity}</td>
    <td>{props.planet.mass}</td>
    <td>
      <Link to={"/editplanet/"+props.planet._id}>edit</Link> | <a href="#" onClick={() => { props.deletePlanet(props.planet._id) }}>delete</a>
    </td>
  </tr>
)

export default class PlanetList extends Component {
  constructor(props) {
    super(props);

    this.deletePlanet = this.deletePlanet.bind(this)

    this.state = {planet: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/planet/')
      .then(response => {
        this.setState({ planet: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePlanet(id) {
    axios.delete('http://localhost:5000/planet/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        planet: this.state.planet.filter(el => el._id !== id)
    })
  }

  planetList() {
    return this.state.planet.map(currentplanet => {
      return <Planet planet={currentplanet} deletePlanet={this.deletePlanet} key={currentplanet._id}/>;
    })
  }

  render() {
    return (
      <div>
        <CreatePlanet/>
        <h3>Logged Planet</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Planet</th>
              <th>Station</th>
              <th>Capasity</th>
              <th>Mass</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.planetList() }
          </tbody>
        </table>
      </div>
    )
  }
}
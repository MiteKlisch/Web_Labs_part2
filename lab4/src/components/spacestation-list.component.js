import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateSpaceStation from "./create-edit-components/create-spacestation.component";


const SpaceStation = props => (
  <tr>
    <td>{props.spacestation.spacestationname}</td>
    <td>{props.spacestation.needs}</td>
    <td>{props.spacestation.capasity}</td>
    <td>
      <Link to={"/editstation/"+props.spacestation._id}>edit</Link> | <a href="#" onClick={() => { props.deleteSpaceStation(props.spacestation._id) }}>delete</a>
    </td>
  </tr>
)

export default class SpaceStationList extends Component {
  constructor(props) {
    super(props);

    this.deleteSpaceStation = this.deleteSpaceStation.bind(this)

    this.state = {spacestation: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/spacestation/')
      .then(response => {
        this.setState({ spacestation: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteSpaceStation(id) {
    axios.delete('http://localhost:5000/spacestation/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        spacestation: this.state.spacestation.filter(el => el._id !== id)
    })
  }

  spacestationList() {
    return this.state.spacestation.map(currentspacestation => {
      return <SpaceStation spacestation={currentspacestation} deleteSpaceStation={this.deleteSpaceStation} key={currentspacestation._id}/>;
    })
  }

  render() {
    return (
      <div>
        <CreateSpaceStation/>
        <h3>Logged SpaceStation</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>SpaceStation</th>
              <th>Needs</th>
              <th>Capasity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.spacestationList() }
          </tbody>
        </table>
      </div>
    )
  }
}
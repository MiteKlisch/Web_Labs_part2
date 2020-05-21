import React, { Component } from 'react';
import axios from 'axios';


export default class CreateSpaceStation extends Component {
  constructor(props) {
    super(props);

    this.onChangeSpaceStationname = this.onChangeSpaceStationname.bind(this);
    this.onChangeCapasity = this.onChangeCapasity.bind(this);
    this.onChangeNeeds = this.onChangeNeeds.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        spacestationname: '',
        capasity: 0,
        needs: 0,
        spacestation: []
    }
  }

  onChangeSpaceStationname(e) {
    this.setState({
        spacestationname: e.target.value
    })
  }


  onChangeCapasity(e) {
    this.setState({
        capasity: e.target.value
    })
  }

  onChangeNeeds(e) {
    this.setState({
        needs: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const spacestation = {
        spacestationname: this.state.spacestationname,
        needs: this.state.needs,
        capasity: this.state.capasity,
    }

    console.log(spacestation);

    axios.post('http://localhost:5000/spacestation/add', spacestation)
      .then(res => console.log(res.data));

    window.location = '/spacestation';
  }

  render() {
    return (
    <div>
      <h3>Create New SpaceStation Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
            <label>SpaceStation name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.spacestationname}
                onChange={this.onChangeSpaceStationname}
                />
        </div>

        <div className="form-group">
          <label>Capasity: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.capasity}
              onChange={this.onChangeCapasity}
              />
        </div>
        <div className="form-group">
          <label>Needs: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.needs}
              onChange={this.onChangeNeeds}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create SpaceStation Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
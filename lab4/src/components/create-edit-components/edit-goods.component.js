import React, { Component } from 'react';
import axios from 'axios';


export default class EditGoods extends Component {
  constructor(props) {
    super(props);

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeGoodsname = this.onChangeGoodsname.bind(this);
    this.onChangeMass = this.onChangeMass.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        code: 0,
      goodsname: '',
      mass: 0,
      goods: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/goods/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            code: response.data.code,
          goodsname: response.data.goodsname,
          mass: response.data.mass,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeCode(e) {
    this.setState({
      code: e.target.value
    })
  }

  onChangeGoodsname(e) {
    this.setState({
      goodsname: e.target.value
    })
  }

  onChangeMass(e) {
    this.setState({
      mass: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const goods = {
      code: this.state.code,
      goodsname: this.state.goodsname,
      mass: this.state.mass
    }

    console.log(goods);

    axios.post('http://localhost:5000/goods/update/' + this.props.match.params.id, goods)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Code: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.code}
              onChange={this.onChangeCode}
              />
        </div>
        <div className="form-group">
          <label>Goods name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.goodsname}
              onChange={this.onChangeGoodsname}
              />
        </div>
        <div className="form-group">
          <label>Mass: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.mass}
              onChange={this.onChangeMass}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Goods Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
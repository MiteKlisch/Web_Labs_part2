import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CreateGoods from "./create-edit-components/create-goods.component";


const Goods = props => (
  <tr>
    <td>{props.goods.code}</td>
    <td>{props.goods.goodsname}</td>
    <td>{props.goods.mass}</td>
    <td>
      <Link to={"/edit/"+props.goods._id}>edit</Link> | <a href="#" onClick={() => { props.deleteGoods(props.goods._id) }}>delete</a>
    </td>
  </tr>
)

export default class GoodsList extends Component {
  constructor(props) {
    super(props);

    this.deleteGoods = this.deleteGoods.bind(this)

    this.state = {goods: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/goods/')
      .then(response => {
        this.setState({ goods: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteGoods(id) {
    axios.delete('http://localhost:5000/goods/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
        goods: this.state.goods.filter(el => el._id !== id)
    })
  }

  goodsList() {
    return this.state.goods.map(currentgoods => {
      return <Goods goods={currentgoods} deleteGoods={this.deleteGoods} key={currentgoods._id}/>;
    })
  }

  render() {
    return (
      <div>
        <CreateGoods/>
        <h3>Logged Goods</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Code</th>
              <th>Goodsname</th>
              <th>Mass</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.goodsList() }
          </tbody>
        </table>
      </div>
    )
  }
}
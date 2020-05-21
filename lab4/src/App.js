import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './App.css';

import Navbar from "./components/navbar.component"
import GoodsList from "./components/goods-list.component";
import EditGoods from "./components/create-edit-components/edit-goods.component";
import PlanetList from "./components/planet-list.component";
import EditPlanet from "./components/create-edit-components/edit-planet.component";
import SpaceStationList from "./components/spacestation-list.component";
import EditSpaceStation from "./components/create-edit-components/edit-spacestation.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={GoodsList} />
        <Route path="/edit/:id" component={EditGoods} />
        {/* <Route path="/create" component={CreateGoods} /> */}
        <Route path="/planet" component={PlanetList} />
        <Route path="/editplanet/:id" component={EditPlanet} />
        <Route path="/spacestation" component={SpaceStationList} />
        <Route path="/editstation/:id" component={EditSpaceStation} />
      </div>
    </Router>
  );
}


export default App;

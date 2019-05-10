import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      editId: null,
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({ smurfs: res.data });
      })
      .catch(err => console.log(err));
  };

  handleUpdate = id => {
    this.setState({ editId: id });
  };

  updateSmurf = updatedSmurf => {
    axios
      .put(`http://localhost:3333/smurfs/${this.state.editId}`, updatedSmurf)
      .then(res => {
        this.setState({
          smurfs: res.data,
          editId: null,
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <nav className="App__nav">
          <NavLink
            className="App__nav__link"
            activeClassName="App__nav__link--active"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="App__nav__link"
            activeClassName="App__nav__link--active"
            to="/smurf-form"
          >
            Add New Smurf
          </NavLink>
        </nav>

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              handleUpdate={this.handleUpdate}
              deleteSmurf={this.deleteSmurf}
              editId={this.state.editId}
              updateSmurf={this.updateSmurf}
            />
          )}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const newSmurf = this.state;
    this.props.addSmurf(newSmurf);
    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <h2 className="SmurfForm__title">Add New Smurf</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <br />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <br />
          <input
            className="SmurfForm__input"
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <br />
          <button className="SmurfForm__submit" type="submit">
            Add to the village
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

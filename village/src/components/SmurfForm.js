import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.smurf ? this.props.smurf.name : '',
      age: this.props.smurf ? this.props.smurf.age : '',
      height: this.props.smurf ? this.props.smurf.height : '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.smurf) {
      const updatedSmurf = this.state;
      this.props.updateSmurf(updatedSmurf);
    } else {
      const newSmurf = this.state;
      this.props.addSmurf(newSmurf);
      this.props.history.push('/');
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const className = this.props.smurf
      ? 'SmurfForm UpdateSmurf'
      : 'SmurfForm AddSmurf';
    return (
      <div className={className}>
        {!this.props.smurf && (
          <h2 className="SmurfForm__title">Add New Smurf</h2>
        )}
        {this.props.smurf && <h2 className="SmurfForm__title">Edit Smurf</h2>}
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
          {!this.props.smurf && (
            <button className="SmurfForm__submit" type="submit">
              Add to the village
            </button>
          )}

          {this.props.smurf && (
            <button className="SmurfForm__submit" type="submit">
              Update Smurf
            </button>
          )}
        </form>
      </div>
    );
  }
}

export default SmurfForm;

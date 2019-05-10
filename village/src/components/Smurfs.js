import React, { Component } from 'react';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1 className="Smurfs__title">Smurf Village</h1>
        <ul style={{ padding: 0 }}>
          {this.props.smurfs.map(smurf => {
            if (smurf.id === this.props.editId) {
              return (
                <SmurfForm
                  key={smurf.id}
                  updateSmurf={this.props.updateSmurf}
                  smurf={smurf}
                />
              );
            } else {
              return (
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                  handleUpdate={this.props.handleUpdate}
                  deleteSmurf={this.props.deleteSmurf}
                />
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;

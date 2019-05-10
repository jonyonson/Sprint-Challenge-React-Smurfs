import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3 className="Smurf__name">{props.name}</h3>
      <p className="Smurf__height">{props.height} tall</p>
      <p className="Smurf__age">{props.age} smurf years old</p>
      <MdDeleteForever
        onClick={() => props.deleteSmurf(props.id)}
        className="Smurf__delete"
        size="24"
      />
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: '',
};

export default Smurf;

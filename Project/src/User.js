import React from 'react';
import PropTypes from 'prop-types';

const User = ({ name, surname, id }) => {
  return (
    <div className="user">
      <h3>{name} {surname}</h3>
      <p>User ID: {id}</p>
      {}
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default User;

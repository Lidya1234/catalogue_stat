import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { CHANGE_FILTER } from '../reducers/catalogueSlice';

const Catalogue = ({ key, item, name }) => {
  const dispatch = useDispatch();
  return (
    <div>

      <Link to="/Singlelist" onClick={() => dispatch(CHANGE_FILTER(item))}>
        <img src={name} alt={key} />
        <h1 className="item-name">{item}</h1>
      </Link>

    </div>
  );
};

Catalogue.propTypes = {
  key: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Catalogue;

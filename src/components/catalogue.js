import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import '../style.css';
import { useDispatch } from 'react-redux';
import { CHANGE_SINGLE } from '../reducers/catalogueSlice';

const Catalogue = ({ item, name }) => {
  const dispatch = useDispatch();
  return (
    <Link to="/Singlelist" onClick={() => dispatch(CHANGE_SINGLE(item))}>
      <div data-testid="catalogue">
        <img src={name} alt={name} />
        <h1 className="item-name">{item}</h1>
      </div>
    </Link>

  );
};

Catalogue.propTypes = {
  item: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default Catalogue;

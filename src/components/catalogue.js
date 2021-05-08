import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { CHANGE_FILTER } from '../reducers/catalogueSlice';

const Catalogue = ({ key, item, name }) => {
  const dispatch = useDispatch();
  return (
    <div>

      <Link to="/Singlelist" onClick={() => dispatch(CHANGE_FILTER(item))}>
        <img src={name} />
        <h1 className="item-name">{item}</h1>
      </Link>

    </div>
  );
};
export default Catalogue;

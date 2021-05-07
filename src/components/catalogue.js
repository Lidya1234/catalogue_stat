import React from 'react'

import { CHANGE_FILTER } from '../reducers/catalogueSlice'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import { fetchCatalog } from '../reducers/catalogueSlice';
import {  useDispatch } from 'react-redux'

const Catalogue = ( { key ,item, name } ) =>
{
    const dispatch = useDispatch()
return(
    <div>
   
    <Link to ='#' onClick={() => dispatch(CHANGE_FILTER(item))}><img src={name} />
    <h1 className="item-name">{item}</h1></Link>
   
  </div>
    );
}
export default Catalogue;

 

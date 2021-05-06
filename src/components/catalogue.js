import React from 'react'

import { DISPLAYLIST, FILTERLIST } from '../reducers/catalogueSlice'
import Card from 'react-bootstrap/Card';


const Catalogue = ( { key ,item, name } ) =>
{
return(
  
    <img src={name} />
  
    );
}
export default Catalogue;

 

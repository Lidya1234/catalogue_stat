import React from 'react'

import { DISPLAYLIST, FILTERLIST } from '../reducers/catalogueSlice'
import Card from 'react-bootstrap/Card';


const Catalogue = ( {key ,catalogue} ) =>
{
return(
    <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>{ key }</Card.Title>
     </Card.Body>
   </Card>
    );
}
export default Catalogue;

 

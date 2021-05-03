import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DISPLAYLIST, FILTERLIST } from '../reducers/catalogueSlice'

const CatalogueList = () => {
    const catalogue = useSelector((state) => state.catalogue.value)
    const dispatch = useDispatch()
// async componentDidMount()
// {
//    
// }

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(DISPLAYLIST())}
        >
          Increment
        </button>
        <span>count</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(FILTERLIST())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}


export default CatalogueList;
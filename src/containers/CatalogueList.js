import React,{ useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DISPLAYLIST, FILTERLIST } from '../reducers/catalogueSlice'
import Catalogue from '../components/Catalogue'
import { fetchCatalogs } from '../reducers/catalogueSlice'
import CatalogueFilter from '../components/CatalogueFilter'
import CardGroup from 'react-bootstrap/CardGroup';

const CatalogueList = () => {
  
// const catalogues = useSelector((state) =>state.catalog)
    const dispatch = useDispatch()
useEffect(() =>
{
   dispatch(fetchCatalogs())
  
},[])
const {catalogues, cataloguesLoading, catalogueLoading, catalogue, filter } = useSelector((state) => state.catalog)
console.log (catalogues)
  // const filtered = filter === 'ALL' ? catalogues : catalogues.filter(item => catalogue[item].strCategory.includes(filter))
  //const addCatalog =( catalog ) => {<Catalogue key ={catalog.idCategory} item={catalog} />}

  return (
    <div>
     <CatalogueFilter /> 
     <div className= "grid sec-2-grid ">
     {catalogues.map((catalog) => <Catalogue key ={catalog.idCategory} item={catalog.strCategory}  name = {catalog.strCategoryThumb}/>) }
     </div>

    </div>
  )
}


export default CatalogueList;
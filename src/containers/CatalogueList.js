import React,{ useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DISPLAYLIST, FILTERLIST } from '../reducers/catalogueSlice'
import Catalogue from '../components/Catalogue'
import fetchCatalogs from '../helpers/fetchCatalogs'
import CatalogueFilter from '../components/CatalogueFilter'
const CatalogueList = () => {
    const {catalogues, cataloguesLoading, catalogueLoading, catalogue, filter } = useSelector((state) => state.catalog)

    // const cataloguesLoading =  useSelector((state) => state.cataloguesLoading.value)
console.log (catalogues)
    // const catalogues = useSelector((state) => state.catalogues.value)
    // const  catalogueLoading = useSelector((state) => state. catalogueLoading.value)
    const dispatch = useDispatch()
useEffect(() =>
{
  if (catalogues === null || catalogues.length === 0)
  {
   fetchCatalogs()
  }
  else{
    dispatch(DISPLAYLIST(catalogues))
  }
}, [fetchCatalogs, catalogues])
  
  const filtered = filter === 'ALL' ? catalogues : catalogues.filter(item => item.name.includes(filter))
  const addCatalog =( catalog ) => {<Catalogue key ={catalog.id} item={catalog} />}

  return (
    <div>
     <CatalogueFilter /> 
     {filtered.map(addCatalog) }
    </div>
  )
}


export default CatalogueList;
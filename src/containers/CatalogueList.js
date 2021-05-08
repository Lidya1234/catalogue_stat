import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CHANGE_FILTER, fetchCatalogs } from '../reducers/catalogueSlice';
import Catalogue from '../components/Catalogue';

import CatalogueFilter from '../components/CatalogueFilter';
import '../style.css';

const CatalogueList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogs());
  }, []);
  const {
    catalogues, cataloguesLoading, catalogueLoading, catalogue, filter,
  } = useSelector((state) => state.catalog);
  const handleFilterChange = (event) => {
    event.preventDefault();

    dispatch(CHANGE_FILTER(event.target.value));
  };
  console.log(catalogues);
  if (filter === undefined) {
    filter = 'ALL';
  }
  const filtered = filter === 'ALL' ? catalogues : catalogues.filter((catalog) => catalog.strCategory.includes(filter));

  const categories = [];
  categories.push('ALL');
  catalogues.map((x) => categories.push(x.strCategory));

  return (
    <div>
      <CatalogueFilter categories={categories} handleFilterChange={handleFilterChange} />
      <div className="sec-2-grid">
        {filtered.map((catalog) => <Catalogue key={catalog.idCategory} item={catalog.strCategory} name={catalog.strCategoryThumb} />) }
      </div>

    </div>
  );
};

export default CatalogueList;

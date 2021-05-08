import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SingleCatalogue from '../components/SingleCatalogue';
import { fetchCatalogs } from '../reducers/catalogueSlice';

import '../style.css';

const Singlelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogs());
  }, []);
  const {
    catalogues, catalogue, filter,
  } = useSelector((state) => state.catalog);

  console.log(catalogue);

  const filtered = filter === 'ALL' ? catalogues : catalogues.filter((catalog) => catalog.strCategory.includes(filter));

  return (
    <div>

      <div>
        {filtered.map((catalog) => <SingleCatalogue key={catalog.idCategory} item={catalog.strCategory} name={catalog.strCategoryThumb} description={catalog.strCategoryDescription} />) }
      </div>
    </div>

  );
};

export default Singlelist;

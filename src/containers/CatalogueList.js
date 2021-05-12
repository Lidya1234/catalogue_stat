import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { CHANGE_FILTER, fetchCatalogs } from '../reducers/catalogueSlice';
import Catalogue from '../components/catalogue';

import CatalogueFilter from '../components/catalogueFilter';
import '../style.css';

const CatalogueList = () => {
  const dispatch = useDispatch();
  const {
    catalogues, cataloguesLoading,
  } = useSelector((state) => state.catalog);
  useEffect(() => {
    dispatch(fetchCatalogs());
  }, [dispatch]);
  let { filter } = useSelector((state) => state.catalog);
  const handleFilterChange = (event) => {
    event.preventDefault();

    dispatch(CHANGE_FILTER(event.target.value));
  };
  if (filter === undefined) {
    filter = 'ALL';
  }
  const filtered = filter === 'ALL' ? catalogues : catalogues.filter((catalog) => catalog.strCategory.includes(filter));

  const categories = [];
  categories.push('ALL');
  catalogues.map((x) => categories.push(x.strCategory));
  if (cataloguesLoading === 'PENDING') {
    return (
      <Loading />
    );
  }
  return (
    <div>
      <CatalogueFilter categories={categories} handleFilterChange={handleFilterChange} />
      <div className="sec-2-grid item-list">
        {filtered.map((catalog) => (
          <Catalogue
            key={catalog.idCategory}
            item={catalog.strCategory}
            name={catalog.strCategoryThumb}
          />
        )) }
      </div>

    </div>
  );
};

export default CatalogueList;

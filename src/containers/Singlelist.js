import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import SingleCatalogue from '../components/SingleCatalogue';
import { fetchCatalogs } from '../reducers/catalogueSlice';

import '../style.css';

const Singlelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCatalogs());
  }, []);
  const {
    catalogues, cataloguesLoading, filter,
  } = useSelector((state) => state.catalog);

  const filtered = filter === 'ALL' ? catalogues : catalogues.filter((catalog) => catalog.strCategory.includes(filter));
  if (cataloguesLoading === 'PENDING') {
    return (
      <Loading />
    );
  }
  return (
    <div>

      <div className="item-list">
        {filtered.map((catalog) => (
          <SingleCatalogue
            key={catalog.strCategoryThumb}
            item={catalog.strCategory}
            name={catalog.strCategoryThumb}
            description={catalog.strCategoryDescription}
          />
        )) }
      </div>
    </div>

  );
};

export default Singlelist;

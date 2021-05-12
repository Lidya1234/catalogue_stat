import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';
import SingleCatalogue from '../components/SingleCatalogue';

import '../style.css';

const Singlelist = () => {
  const {
    catalogues, cataloguesLoading,
  } = useSelector((state) => state.catalog);

  let { single } = useSelector((state) => state.catalog);

  if (single === undefined) {
    single = 'ALL';
  }

  const filtered = single === 'ALL' ? catalogues : catalogues.filter((catalog) => catalog.strCategory.includes(single));
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

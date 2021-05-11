import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import SingleCatalogue from '../components/SingleCatalogue';

describe('The singleCatalogue component should render with this information', () => {
  const category = {
 
    strCategory: 'Beef',
    strCategoryDescription: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]',
    strCategoryThumb: 'https://www.themealdb.com/images/category/beef.png',
  };
  render(
    <Router>
      <SingleCatalogue

        item={category.strCategory}
        name={category.strCategoryThumb}
        description={category.strCategoryDescription}
      />
    </Router>,
  );

  const component = renderer.create(
    <Router>
      <SingleCatalogue
        key={category.idCategory}
        item={category.strCategory}
        name={category.strCategoryThumb}
        description={category.strCategoryDescription}
      />
    </Router>,
  ).toJSON();
  const catalogue = screen.getByTestId('catalogue');
  test('Component should Render', () => {
    expect(catalogue).toBeInTheDocument();
  });
  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

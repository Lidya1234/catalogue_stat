import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from '../components/footer';
import '@testing-library/jest-dom/extend-expect';

describe('The Footer should match with snapshot', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
  test('Matchs snapshot', () => {
    expect(getByText).toMatchSnapshot();
  });
  
  const component = renderer.create(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  ).toJSON();

  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

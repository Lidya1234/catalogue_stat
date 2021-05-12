import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Nav from '../components/Nav';
import '@testing-library/jest-dom/extend-expect';

describe('The navigation bar should contain', () => {
  it('Meal-Categories logo', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>,
    );
    const link = getByText('Meal-Categories');
    expect(link).toBeInTheDocument();
  });
  const component = renderer.create(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>,
  ).toJSON();

  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

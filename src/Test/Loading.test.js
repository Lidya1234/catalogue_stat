import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Loading from '../components/Loading';
import '@testing-library/jest-dom/extend-expect';

describe('The Loading component should contain', () => {
  it('Loading text', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Loading />
      </MemoryRouter>,
    );
    const text = getByText('Loading ...');
    expect(text).toBeInTheDocument();
  });

  const component = renderer.create(
    <MemoryRouter>
      <Loading />
    </MemoryRouter>,
  ).toJSON();

  test('Matchs snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

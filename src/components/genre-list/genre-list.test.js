import React from 'react';
import renderer from 'react-test-renderer';

import GenreList from './genre-list';
import {movie, noop} from '../../data-test';

it(`GenreList is rendered correctly`, () => {
  const tree = renderer.create(
      <GenreList
        allMovies={[movie]}
        activeGenre={`All genres`}
        onChangeGenre={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

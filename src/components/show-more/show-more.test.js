import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more';

const noop = () => {};

it(`ShowMore is rendered correctly`, () => {
  const tree = renderer.create(
      <ShowMore onShowMoreClick = {noop} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

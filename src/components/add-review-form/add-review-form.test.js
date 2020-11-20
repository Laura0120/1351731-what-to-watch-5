import React from 'react';
import renderer from 'react-test-renderer';
import AddReviewForm from './add-review-form';

const noop = () => {};

it(`AddReviewForm is rendered correctly`, () => {
  const tree = renderer.create(
      <AddReviewForm
        id={1}
        isLoading={false}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

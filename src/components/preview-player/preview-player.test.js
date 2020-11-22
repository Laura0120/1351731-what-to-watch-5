import React from 'react';
import renderer from 'react-test-renderer';

import PreviwPlayer from './preview-player';

it(`PreviwPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <PreviwPlayer
        video={`http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`}
        preview={`https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`}
        isPlaying={false}
      >
        <video />
      </PreviwPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});


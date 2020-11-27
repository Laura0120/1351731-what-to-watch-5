import React from 'react';
import renderer from 'react-test-renderer';

import PreviewPlayer from './preview-player';

it(`PreviewPlayer is rendered correctly`, () => {
  const tree = renderer.create(
      <PreviewPlayer
        video={`http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`}
        preview={`https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`}
        isPlaying={false}
      >
        <video />
      </PreviewPlayer>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});


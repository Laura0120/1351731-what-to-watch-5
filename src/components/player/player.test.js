import React from 'react';
import renderer from 'react-test-renderer';
import {Player} from "./player";

const movie = {
  id: 1,
  poster: `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`,
  preview: `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`,
  backgroundImage: `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`,
  backgroundColor: `#F1E9CE`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideo: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  title: `Macbeth`,
  rating: {
    ratingScore: 3.3,
    countVotesRating: 48798
  },
  director: `Justin Kurzel`,
  starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
  year: 2015,
  runtime: 113,
  genre: `Drama`,
  description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
  isFavorite: false
};

const noop = () => {};

it(`Player is rendered correctly`, () => {
  const tree = renderer.create(
      <Player
        movie={movie}
        isPlaying={false}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        onExitClick={noop}
        onPlayPauseClick={noop}
        onCanPlayThrough={noop}
        onProgressVideoSet={noop}
      />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();


  expect(tree).toMatchSnapshot();
});


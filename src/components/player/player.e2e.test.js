import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Player} from "./player";

configure({adapter: new Adapter()});

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

it(`Should exit button be pressed`, () => {
  const handleExitClick = jest.fn();

  const player = mount(
      <Player
        movie={movie}
        onExitClick = {handleExitClick}
        isPlaying = {true}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        onPlayPauseClick = {noop}
        onProgressVideoSet ={noop}
        onCanPlayThrough ={noop}
      />
  );

  const exitButton = player.find(`button.player__exit`);
  exitButton.simulate(`click`);
  expect(handleExitClick).toHaveBeenCalledTimes(1);
});

it(`Should play/pause button be pressed`, () => {
  const handlePlayPauseClick = jest.fn();

  const player = mount(
      <Player
        movie={movie}
        onExitClick = {noop}
        isPlaying = {true}
        runtimeVideo = {600000}
        progressVideo={30000}
        toggleMovement={30000}
        onPlayPauseClick = {handlePlayPauseClick}
        onProgressVideoSet ={noop}
        onCanPlayThrough ={noop}
      />
  );

  const exitButton = player.find(`button.player__play`);
  exitButton.simulate(`click`);
  expect(handlePlayPauseClick).toHaveBeenCalledTimes(1);
});

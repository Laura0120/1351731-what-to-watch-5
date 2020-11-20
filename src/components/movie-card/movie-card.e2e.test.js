import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MovieCard from "./movie-card";

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

it(`Should click on the movie page`, () => {
  const handleMoviePageClick = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {handleMoviePageClick}
        onMouseOver = {noop}
        onMouseOut = {noop}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`click`);
  expect(handleMoviePageClick).toHaveBeenCalledTimes(1);
});

it(`Should hover mouse over movie card`, () => {
  const handleMovieCardMouseOver = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {noop}
        onMouseOver = {handleMovieCardMouseOver}
        onMouseOut = {noop}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`mouseover`);
  expect(handleMovieCardMouseOver).toHaveBeenCalledTimes(1);
});

it(`Should hover mouse out movie card`, () => {
  const handleMovieCardMouseOut = jest.fn();

  const movieCard = shallow(
      <MovieCard
        movie={movie}
        onMovieClick = {noop}
        onMouseOver = {noop}
        onMouseOut = {handleMovieCardMouseOut}
        renderPlayer = {noop}
      />
  );

  const movieElement = movieCard.find(`article`);
  movieElement.simulate(`mouseout`);
  expect(handleMovieCardMouseOut).toHaveBeenCalledTimes(1);
});

import React from 'react';

import {TABS_NAME} from '../../const';
import {CURRENT_TAB, MOVIE} from '../../prop-type';

const Tabs = (props) => {
  const {currentTab, movie} = props;
  const {rating, description, director, starring, runtime, genre, year} = movie;
  const {ratingScore, ratingDescription, countVotesRating} = rating;

  switch (currentTab) {
    case TABS_NAME.OVERVIEW:
      return (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{ratingScore}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">{ratingDescription}</span>
              <span className="movie-rating__count">{countVotesRating}</span>
            </p>
          </div>

          <div className="movie-card__text">
            {description}
          </div>
        </React.Fragment>
      );
    case TABS_NAME.DETAILS:
      return (
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">{director}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                    Bill Murray, <br/>
                    Edward Norton, <br/>
                    Jude Law, <br/>
                    Willem Dafoe, <br/>
                    Saoirse Ronan, <br/>
                    Tony Revoloru, <br/>
                    Tilda Swinton, <br/>
                    Tom Wilkinson, <br/>
                    Owen Wilkinson, <br/>
                    Adrien Brody, <br/>
                    Ralph Fiennes, <br/>
                    Jeff Goldblum
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">{runtime}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">{genre}</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">{year}</span>
            </p>
          </div>
        </div>
      );
    case TABS_NAME.REVIEWS:
      return (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            <div className="review">
              <blockquote className="review__quote">
                <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.</p>

                <footer className="review__details">
                  <cite className="review__author">Kate Muir</cite>
                  <time className="review__date">December 24, 2016</time>
                </footer>
              </blockquote>
              <div className="review__rating">8,9</div>
            </div>
          </div>
        </div>
      );
  }
};

Tabs.propTypes = {
  movie: MOVIE,
  currentTab: CURRENT_TAB,
};

export default Tabs;

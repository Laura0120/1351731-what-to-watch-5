import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {movieTitle, genre, releaseYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Main} movieTitle={movieTitle} genre={genre} releaseYear={releaseYear} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/mylist' component={MyList} />
        <Route exact path='/films/:id' component={Film} />
        <Route exact path='/films/:id/review' component={AddReview} />
        <Route exact path='/player/:id' component={Player} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseYear: PropTypes.number.isRequired,
};

export default App;

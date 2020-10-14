import React from 'react';

import PROP_TYPES from '../../prop-type';
import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {movies} = props;
  const [firstMovie] = movies;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({history}) => <Main onMovieClick={() => history.push(`/films/:id`)} promoMovie={firstMovie} movies={movies} />}
        />
        <Route exact path='/login'><SignIn/></Route>
        <Route exact path='/mylist' render={({history}) => <MyList onMovieClick={() => history.push(`/films/:id`)} movies={movies}/>}/>
        <Route exact path='/films/:id'><Movie movie={firstMovie} onMovieClick={() => history.push(`/films/:id`)}/></Route>
        <Route exact path='/films/:id/review'><AddReview movie={firstMovie}/></Route>
        <Route exact path='/player/:id'><Player/></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movies: PROP_TYPES.movies
};


export default App;

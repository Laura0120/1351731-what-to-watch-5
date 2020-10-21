import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {MOVIES, ON_CHANGE_GENRE} from '../../prop-type';
import Main from '../main/main';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {movies, onChangeGenre} = props;
  const [firstMovie] = movies;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({history}) => <Main onMovieClick={() => history.push(`/films/:id`)} promoMovie={firstMovie} movies={movies} onChangeGenre={onChangeGenre}/>}
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
  movies: MOVIES,
  onChangeGenre: ON_CHANGE_GENRE
};


const mapStateToProps = (state) => ({
  movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.getMoviesByGenre(activeGenre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

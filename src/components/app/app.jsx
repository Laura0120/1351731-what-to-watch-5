import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import {ActionCreator} from "../../store/action";
import {MOVIES, ON_CHANGE_GENRE, GENRE} from '../../prop-type';
import Main from '../main/main';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {allMovies, currentMovies, activeGenre, onChangeGenre} = props;
  const [firstMovie] = allMovies;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({history}) => <Main onMovieClick={() => history.push(`/films/:id`)} allMovies={allMovies} currentMovies={currentMovies} promoMovie={firstMovie} activeGenre={activeGenre} onChangeGenre={onChangeGenre}/>}
        />
        <Route exact path='/login'><SignIn/></Route>
        <Route exact path='/mylist' render={({history}) => <MyList onMovieClick={() => history.push(`/films/:id`)} currentMovies={currentMovies}/>}/>
        <Route exact path='/films/:id'><Movie movie={firstMovie} onMovieClick={() => history.push(`/films/:id`)}/></Route>
        <Route exact path='/films/:id/review'><AddReview movie={firstMovie}/></Route>
        <Route exact path='/player/:id'><Player/></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  currentMovies: MOVIES,
  allMovies: MOVIES,
  activeGenre: GENRE,
  onChangeGenre: ON_CHANGE_GENRE
};


const mapStateToProps = (state) => ({
  allMovies: state.allMovies,
  currentMovies: state.currentMovies,
  activeGenre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
    dispatch(ActionCreator.updateMoviesByGenre());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

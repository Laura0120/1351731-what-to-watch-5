import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {ActionCreator} from "../../store/action";
import {MOVIES, MOVIE, ON_CHANGE_GENRE, GENRE} from '../../prop-type';
import Main from '../main/main';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import withTabs from '../../hocs/with-tabs/with-tabs';
import {getAllMovies, getMoviesByGenre, getGenre} from '../../store/selectors';
import PrivateRoute from "../private-route/private-route";
import browserHistory from "../../browser-history";

const MovieWrapped = withTabs(Movie);

const App = (props) => {
  const {allMovies, currentMovies, promoMovie, activeGenre, onChangeGenre} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact
          path={`/`}
          render={({history}) => (
            <Main
              onMyListButtonClick={() => history.push(`/mylist`)}
              onMovieClick={() => history.push(`/films/:id`)}
              allMovies={allMovies}
              currentMovies={currentMovies}
              promoMovie={promoMovie}
              activeGenre={activeGenre}
              onChangeGenre={onChangeGenre}
            />)}
        />
        <Route exact path='/login'><SignIn/></Route>
        <PrivateRoute
          exact
          path={`/mylist`}
          render={({history}) => (
            <MyList
              onMovieClick={() => history.push(`/films/:id`)}
              movies={currentMovies}
            />
          )}/>
        <Route exact path='/films/:id'><MovieWrapped movie={promoMovie}/></Route>
        <Route exact path={`/films/:id/review`}><AddReview movie={promoMovie}/></Route>
        <Route exact path='/player/:id'><Player/></Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  currentMovies: MOVIES,
  promoMovie: MOVIE,
  allMovies: PropTypes.array.isRequired,
  activeGenre: GENRE,
  onChangeGenre: ON_CHANGE_GENRE
};


const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
  currentMovies: getMoviesByGenre(state),
  activeGenre: getGenre(state),
  promoMovie: state.DATA.promo
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(activeGenre) {
    dispatch(ActionCreator.changeGenre(activeGenre));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

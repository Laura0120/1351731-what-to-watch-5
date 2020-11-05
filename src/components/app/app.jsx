import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

import {MOVIES, MOVIE, GENRE} from '../../prop-type';
import browserHistory from "../../browser-history";
import {AppRoute} from '../../const';
import Main from '../main/main';
import Movie from '../movie/movie';
import AddReview from '../add-review/add-review';
import MyList from '../my-list/my-list';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';
import withTabs from '../../hocs/with-tabs/with-tabs';
import {getAllMovies, getMoviesByGenre, getGenre} from '../../store/selectors';
import PrivateRoute from "../private-route/private-route";

const MovieWrapped = withTabs(Movie);

const App = (props) => {
  const {allMovies, currentMovies, promoMovie, activeGenre} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            allMovies={allMovies}
            currentMovies={currentMovies}
            promoMovie={promoMovie}
            activeGenre={activeGenre}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}><SignIn/></Route>
        <PrivateRoute exact path={AppRoute.MY_LIST}render={<MyList movies={currentMovies}/>}></PrivateRoute>
        <PrivateRoute
          exact
          path={AppRoute.MY_LIST}
          render={() => {
            return (
              <MyList movies={currentMovies}
              />
            );
          }}
        />
        <Route exact path={AppRoute.FILM_ID}><MovieWrapped movie={promoMovie}/></Route>
        <Route exact path={AppRoute.FILM_ID_REVIW}><AddReview movie={promoMovie}/></Route>
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
};


const mapStateToProps = (state) => ({
  allMovies: getAllMovies(state),
  currentMovies: getMoviesByGenre(state),
  activeGenre: getGenre(state),
  promoMovie: state.DATA.promo
});

export {App};
export default connect(mapStateToProps)(App);

import React from 'react';
import {connect} from "react-redux";

import {AuthorizationStatus, AppRoute} from "../../const";
import {fetchFavorite} from "../../store/api-actions";
import {ActionCreator} from "../../store/action";
import {FUNCTION, AUTHORIZATION_STATUS} from '../../prop-type';

const UserBlock = (props) => {
  const {authorizationStatus, onMyListButtonClick} = props;

  return (
    <div className='user-block'>
      {authorizationStatus === AuthorizationStatus.AUTH ?
        <div className='user-block__avatar' onClick={onMyListButtonClick}>
          <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
        </div> :
        <div className="user-block">
          <a href="login" className="user-block__link">Sign in</a>
        </div>}
    </div>
  );
};

UserBlock.propTypes = {
  authorizationStatus: AUTHORIZATION_STATUS,
  onMyListButtonClick: FUNCTION,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onMyListButtonClick() {
    dispatch(fetchFavorite());
    dispatch(ActionCreator.redirectToRoute(AppRoute.MY_LIST));
  }
});

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);

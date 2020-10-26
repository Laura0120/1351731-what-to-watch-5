import React, {PureComponent} from 'react';
import Tabs from '../../components/tabs/tabs';
import {TABS_NAME} from '../../const';

const withMovie = (Component) => {
  class WithMovie extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        currentTab: TABS_NAME.OVERVIEW,
      };

      this.handleTabChange = this.handleTabChange.bind(this);
    }

    handleTabChange(evt) {
      evt.preventDefault();
      const tab = evt.target;
      this.setState({currentTab: tab.textContent});
    }

    render() {
      return <Component
        {...this.props}
        renderTabs = {(movie) => {
          return (
            <Tabs
              currentTab = {this.state.currentTab}
              movie = {movie}
            />
          );
        }}
        onChangeTab = {this.handleTabChange}
        currentTab = {this.state.currentTab}
      />;

    }
  }

  return WithMovie;
};

export default withMovie;

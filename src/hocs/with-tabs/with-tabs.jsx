import React, {PureComponent} from 'react';

import Tabs from '../../components/tabs/tabs';
import {TABS_NAME} from '../../const';

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
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
        renderTabs = {(movie, comments) => {
          return (
            <Tabs
              currentTab = {this.state.currentTab}
              onChangeTab = {this.handleTabChange}
              movie = {movie}
              comments={comments}
            />
          );
        }}
      />;

    }
  }

  return WithTabs;
};

export default withTabs;

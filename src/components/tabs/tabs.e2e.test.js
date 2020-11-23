import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Tabs from "./tabs";
import {movie} from '../../data-test';

configure({adapter: new Adapter()});

it(`Should change tab`, () => {
  const handleTabChahge = jest.fn();

  const tabs = shallow(
      <Tabs
        currentTab={`overview`}
        movie={movie}
        onChangeTab={handleTabChahge}
        comments={[]}
      />
  );

  const tabList = tabs.find(`a.movie-nav__link`);
  const tabTwo = tabList.at(1);

  tabTwo.simulate(`click`);

  expect(handleTabChahge).toHaveBeenCalledTimes(1);
});


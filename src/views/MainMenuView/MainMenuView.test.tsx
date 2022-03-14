import React from 'react';
import renderer from 'react-test-renderer';
import MainMenuView from './MainMenuView';

describe('MainMenuView', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <MainMenuView
          onPressCustomBridge={() => jest.fn()}
          onPressRestaurantList={() => jest.fn()}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

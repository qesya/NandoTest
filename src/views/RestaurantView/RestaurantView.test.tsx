import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantView from './RestaurantView';
import {render} from '@testing-library/react-native';

describe('RestaurantView', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <RestaurantView
          onPressGoBack={() => jest.fn()}
          data={[]}
          loading={false}
        />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('render loading', () => {
    const component = render(
      <RestaurantView
        onPressGoBack={() => jest.fn()}
        data={[]}
        loading={true}
      />,
    );
    expect(component.queryByTestId('LoadingText')).toBeDefined();
  });
});

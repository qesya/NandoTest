import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantScreen from './RestaurantScreen';

const createTestProps = (props: Object) => ({
  navigation: jest.fn<any, any>()(),
  route: jest.fn<any, any>()(),
  ...props,
});

describe('RestaurantView', () => {
  test('renders correctly', () => {
    let component;
    beforeEach(() => {
      const props = createTestProps({});
      component = renderer.create(<RestaurantScreen {...props} />).toJSON();
    });

    expect(component).toMatchSnapshot();
  });
});

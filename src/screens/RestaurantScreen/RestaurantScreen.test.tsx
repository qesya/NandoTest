import React from 'react';
import renderer from 'react-test-renderer';
import RestaurantScreen from './RestaurantScreen';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  route: jest.fn(),
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

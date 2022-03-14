import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CustomBridgeView from './CustomBridgeView';

describe('CustomBridgeView', () => {
  test('renders correctly', () => {
    const component = renderer
      .create(
        <CustomBridgeView appVersion="1.0.1" onPressGoBack={() => jest.fn()} />,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
  test('app versions defined', () => {
    const appVersion = '1.0.0';
    const component = render(
      <CustomBridgeView
        appVersion={appVersion}
        onPressGoBack={() => jest.fn()}
      />,
    );
    expect(component.queryByTestId('AppVersionText')).toBe(appVersion);
  });
});

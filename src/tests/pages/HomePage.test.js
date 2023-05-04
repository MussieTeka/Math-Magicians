import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../pages/HomePage';

describe('HomePage', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

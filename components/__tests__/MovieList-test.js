import 'react-native';
import React from 'react';
import { MovieList } from '../MovieList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MovieList>Snapshot test!</MovieList>).toJSON();

  expect(tree).toMatchSnapshot();
});

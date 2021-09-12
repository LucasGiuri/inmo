import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { mount } from 'enzyme';

import Loading from './loading';

const LOADING_MESSAGE = 'Loading...';
const LOADING_MESSAGE_LINE2 = 'MESSAGE_LINE2';

describe('Loading', () => {
  test('snapshot renders', () => {
    const l = mount(<Loading message={LOADING_MESSAGE} />);
    expect(l.contains('Loading...')).toBe(true);
    const tree = renderer.create(<Loading message={LOADING_MESSAGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot renders with custom messageLine2', () => {
    const l = mount(<Loading messageLine2={LOADING_MESSAGE_LINE2} />);
    expect(l.contains(LOADING_MESSAGE_LINE2)).toBe(true);
    const tree = renderer.create(<Loading messageLine2={LOADING_MESSAGE_LINE2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot renders with withoutMessage true', () => {
    const Cmp = (
      <Loading message={LOADING_MESSAGE} messageLine2={LOADING_MESSAGE_LINE2} withoutMessage />
    );
    const l = mount(Cmp);
    expect(l.contains(LOADING_MESSAGE)).toBe(false);
    expect(l.contains(LOADING_MESSAGE_LINE2)).toBe(false);
    const tree = renderer.create(Cmp).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('snapshot renders with showSmallSpinner true', () => {
    const tree = renderer.create(<Loading message={LOADING_MESSAGE} showSmallSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

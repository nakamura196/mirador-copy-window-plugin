import React from 'react';
import { shallow } from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import MiradorCopyWindowPlugin from '../src/MiradorCopyWindow';

const Component = MiradorCopyWindowPlugin.component;

function createWrapper(props) {
  return shallow(
    <Component
      {...props}
    />,
  );
}

describe('MiradorCopyWindowPlugin', () => {
  it('has the correct target', () => {
    expect(MiradorCopyWindowPlugin.target).toBe('WindowTopBarPluginMenu');
  });
  describe('renders a component', () => {
    it('renders a thing', () => {
      const wrapper = createWrapper();
      expect(wrapper.find(ListItemText).props().children).toEqual('Copy Window');
    });
  });
});

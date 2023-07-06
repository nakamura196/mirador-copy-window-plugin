import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OpenInNewIcon from '@material-ui/icons/OpenInNewOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import mirador from 'mirador';
import omit from 'lodash/omit';

class CopyWindowComponent extends Component {
  render() {
    const { copyWindow } = this.props;
    return (
      <MenuItem onClick={() => copyWindow()}>
        <ListItemIcon>
          <OpenInNewIcon />
        </ListItemIcon>
        <ListItemText primaryTypographyProps={{ variant: 'body1' }}>
          Copy Window
        </ListItemText>
      </MenuItem>
    );
  }
}

CopyWindowComponent.propTypes = {
  copyWindow: PropTypes.func,
};

CopyWindowComponent.defaultProps = {
  copyWindow: () => { },
};

const copyWindowAction = (windowId) => (dispatch, getState) => {
  const window = getState().windows[windowId];
  const cleanedWindow = omit(window, [
    'id',
    'companionWindowIds',
    'thumbnailNavigationId',
  ]);
  dispatch(mirador.actions.addWindow(cleanedWindow));
};

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch, { windowId }) => ({
  copyWindow: () => dispatch(copyWindowAction(windowId)),
});

export default {
  target: 'WindowTopBarPluginMenu',
  mode: 'add',
  component: CopyWindowComponent,
  mapDispatchToProps,
  mapStateToProps,
};

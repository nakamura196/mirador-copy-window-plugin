import React from 'react';
import { shallow } from 'enzyme';
import ListItemText from '@material-ui/core/ListItemText';
import MiradorCopyWindowPlugin from '../src/MiradorCopyWindow';

function createWrapper(props) {
    return shallow(
        <MiradorCopyWindowPlugin.component
            handleClose={() => { }}
            openDownloadDialog={() => { }}
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
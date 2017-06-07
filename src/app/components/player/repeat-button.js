/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import SimpleTooltip from '../common/simple-tooltip';
import ACTION from '../../constants/action';
import songDispatcher from '../../dispatcher/song-dispatcher';
import SvgIcon from '../common/svg-icon';
import repeatIcon from '../../../assets/img/ic_repeat_one_black_24px.svg';

export default class RepeatButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repeatCurrentSong: false
        };
    }

    handleClick() {
        const newRepeatCurrentSong = !this.state.repeatCurrentSong;
        this.setState({
            repeatCurrentSong: newRepeatCurrentSong
        });
        songDispatcher.dispatch(ACTION.REPEAT_CURRENT_SONG, newRepeatCurrentSong);
    }

    render() {
        const isActive = this.state.repeatCurrentSong;
        const isActiveStyle = isActive ? { '': '' } : { 'opacity': '0.5' };

        return (
            <SimpleTooltip text='Repeat current song'>
                <SvgIcon
                    symbol={ repeatIcon }
                    title='Repeat'
                    width='24px'
                    height='24px'
                    style={ isActiveStyle }
                    onClick={() => this.handleClick() }/>
            </SimpleTooltip>
        );
    }
}

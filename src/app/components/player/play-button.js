/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import songDispatcher from '../../dispatcher/song-dispatcher';
import ACTION from '../../constants/action';
import SONG_STATE from '../../constants/song-state';
import SvgIcon from '../common/svg-icon';
import playIcon from '../../../assets/img/ic_play_circle_filled_black_24px.svg';
import pauseIcon from '../../../assets/img/ic_pause_circle_filled_black_24px.svg';

export default class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            songState: SONG_STATE.PAUSED
        };
    }

    handleClick() {
        switch (this.state.songState) {
            case SONG_STATE.PAUSED:
                songDispatcher.dispatch(ACTION.PLAY);
                break;
            case SONG_STATE.PLAYING:
                songDispatcher.dispatch(ACTION.PAUSE);
                break;
        }
    }

    handleCurrentSongUpdate(songInfo) {
        this.setState({
            songState: songInfo.state
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.songState !== nextState.songState;
    }

    render() {
        let playOrPauseIcon = playIcon;
        let playIconClass = 'clr-primary';
        if (this.state.songState === SONG_STATE.PLAYING) {
            playOrPauseIcon = pauseIcon;
            playIconClass = '';
        }
        return (
            <SvgIcon
                symbol={ playOrPauseIcon }
                title='Play'
                width='48'
                height='48'
                className={ playIconClass }
                onClick={() => this.handleClick() }/>
        );
    }

    componentDidMount() {
        songDispatcher.registerOnCurrentSongUpdate('PlayButton', this.handleCurrentSongUpdate.bind(this));
    }
}

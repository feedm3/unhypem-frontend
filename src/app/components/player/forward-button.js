/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import songDispatcher from '../../dispatcher/song-dispatcher';
import ACTION from '../../constants/action';
import SvgIcon from '../common/svg-icon';
import skipNextIcon from '../../../assets/img/ic_skip_next_black_24px.svg';

export default () => {
    return (
        <SvgIcon
            id={ skipNextIcon }
            title="Forward"
            width="36px"
            height="36px"
            onClick={() => songDispatcher.dispatch(ACTION.FORWARD)}
        />
    );
};

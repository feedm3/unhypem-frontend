/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import songDispatcher from '../../dispatcher/song-dispatcher';
import ACTION from '../../constants/action';
import SvgIcon from '../common/svg-icon';
import rewindIcon from '../../../assets/img/ic_skip_previous_black_24px.svg';

export default () => {
    return (
        <SvgIcon
            id={rewindIcon}
            title="Rewind"
            width="36px"
            height="36px"
            onClick={() => songDispatcher.dispatch(ACTION.REWIND) }
        />
    );
};

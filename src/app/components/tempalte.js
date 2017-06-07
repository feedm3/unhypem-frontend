/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import SongPlayer from './player/player-panel';

export default class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    { this.props.children }
                </div>
                <div className="bottom">
                    { /* TODO: put this in own bottom component */ }
                    <SongPlayer />
                </div>
            </div>
        );
    }
}
Template.propTypes = {
    children: PropTypes.node.isRequired
};

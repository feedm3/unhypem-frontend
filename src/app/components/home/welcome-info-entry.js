/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import InfoEntry from './info-entry';

export default class WelcomeInfoEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const body = <div>The charts are based on the <a className='no-link-style' href='http://hypem.com/popular' target='_blank'>hypem popular</a> charts.
            Last update was { this.props.timestamp }.</div>;

        return (
            <InfoEntry header='Welcome' body={ body }/>
        );
    }
}
WelcomeInfoEntry.propTypes = {
    timestamp: PropTypes.string.isRequired
};

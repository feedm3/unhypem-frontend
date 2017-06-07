/**
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class InfoEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className='info-entry-header'>{ this.props.header }</div>
                <div className='info-entry-body'>{ this.props.body }</div>
            </div>
        );
    }
}
InfoEntry.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.object.isRequired,
    className: PropTypes.string
};

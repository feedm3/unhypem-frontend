/**
 * This script is used to display an svg.
 *
 * <p>It is assumed that ths svg file was loaded and only the id of the
 * svg needs to be set.
 *
 * @author Fabian Dietenberger
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';

export default class SvgIcon extends React.Component {
    render() {
        let iconStyleNames = this.props.className ? this.props.className + ' svg-icon ' : 'svg-icon ';
        this.props.onClick ? iconStyleNames += ' svg-icon-clickable' : null;

        return (
            <svg className={ iconStyleNames }
                 style={ this.props.style }
                 width={ this.props.width }
                 height={ this.props.height }
                 onClick={ this.props.onClick }
                 onMouseEnter={ this.props.onMouseEnter }
                 aria-labelledby="title">
                <title id="title">{ this.props.title }</title>
                <use width={ this.props.width }
                     height={ this.props.height }
                     xlinkHref={ '#' + this.props.symbol.id }/>
            </svg>
        );
    }
}

SvgIcon.propTypes = {
    symbol: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func
};

/**
 * @since 2016-09-04 09:34
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';

export default class Toast extends Component {

    static propTypes = {
        open: PropTypes.bool.isRequired,
        autoHideDuration: PropTypes.number,
        top: PropTypes.number,
    };

    static defaultProps = {
        autoHideDuration: 3000,
        top: 50,
    };

    render () {

        const defaultStyle = {
            position: 'fixed',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
            WebkitTransform: 'translate3d(-50%, -50%, 0)',
        };

        const {
            open,
            children,
            autoHideDuration,
            top,
            style,
            ...otherProps,
        } = this.props;

        const computedStyle = {
            ...defaultStyle,
            top: `${top}%`,
            ...style,
        };

        return open ? <div style={computedStyle} {...otherProps}>
            {children}
        </div> : null
    }
}

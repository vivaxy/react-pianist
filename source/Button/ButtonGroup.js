/**
 * @since 2016-09-05 13:24
 * @author vivaxy
 */


import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';
import colors from '../colors';

export default class ButtonGroup extends Component {

    static propTypes = {
    };

    static defaultProps = {
    };

    render () {

        const defaultStyle = {
            textAlign: 'center',
        };

        const {
            children,
            style,
            ...otherProps,
        } = this.props;

        const computedStyle = {
            ...defaultStyle,
            ...style,
        };

        return <div style={computedStyle} {...otherProps}>{children}</div>
    }
}

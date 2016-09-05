/**
 * @since 2016-09-05 13:21
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';
import colors from '../colors';

export default class Button extends Component {

    static propTypes = {
        width: PropTypes.number,
        disabled: PropTypes.bool,
        primary: PropTypes.bool,
    };

    static defaultProps = {
        disabled: false,
        primary: true,
    };

    render () {

        const defaultStyle = {
            display: 'inline-block',
            borderRadius: '4px',
            padding: '0 30px',
            fontSize: '16px',
        };

        const {
            width,
            disabled,
            primary,
            children,
            style,
            ...otherProps,
        } = this.props;

        if (width !== undefined) {
            defaultStyle.width = width;
        }

        if (disabled) {
            defaultStyle.opacity = '0.4';
        }

        if (primary) {
            defaultStyle.backgroundColor = colors.TURQUOISE;
            defaultStyle.color = colors.WHITE;
            defaultStyle.height = '40px';
            defaultStyle.lineHeight = '40px';
        } else {
            defaultStyle.backgroundColor = colors.WHITE;
            defaultStyle.color = colors.TURQUOISE;
            defaultStyle.height = '38px';
            defaultStyle.lineHeight = '38x';
            defaultStyle.border = `1px solid ${colors.BORDER}`;
        }

        const computedStyle = {
            ...defaultStyle,
            ...style,
        };

        return <div style={computedStyle} {...otherProps}>{children}</div>
    }
}

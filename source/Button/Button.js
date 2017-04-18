/**
 * @since 2016-09-05 13:21
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

        const PADDING = 16;
        const BORDER = 1;
        const HEIGHT = 36;

        const defaultStyle = {
            display: 'inline-block',
            borderRadius: '4px',
            padding: `0 ${PADDING}px`,
            fontSize: '14px',
            verticalAlign: 'top',
            cursor: 'pointer',
        };

        const {
            width,
            disabled,
            primary,
            children,
            style,
            ...otherProps,
        } = this.props;

        if (disabled) {
            defaultStyle.opacity = '0.4';
            defaultStyle.cursor = 'not-allowed';
        }

        if (primary) {
            defaultStyle.backgroundColor = colors.PRIMARY;
            defaultStyle.color = colors.WHITE;
            defaultStyle.height = `${HEIGHT}px`;
            defaultStyle.lineHeight = `${HEIGHT}px`;
            if (width !== undefined) {
                defaultStyle.width = `${width - PADDING * 2}px`;
            }
        } else {
            defaultStyle.backgroundColor = colors.ABOUT_WHITE;
            defaultStyle.color = colors.ABOUT_BLACK;
            defaultStyle.height = `${HEIGHT - BORDER * 2}px`;
            defaultStyle.lineHeight = `${HEIGHT - BORDER * 2}px`;
            defaultStyle.border = `${BORDER}px solid ${colors.BORDER}`;
            if (width !== undefined) {
                defaultStyle.width = `${width - PADDING * 2 - BORDER * 2}px`;
            }
        }

        const computedStyle = {
            ...defaultStyle,
            ...style,
        };

        return <div style={computedStyle} {...otherProps}>{children}</div>
    }
}

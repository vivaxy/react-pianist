/**
 * @since 2016-09-02 16:22
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TOP = 'top';
const LEFT = 'left';
const RIGHT = 'right';
const BOTTOM = 'bottom';

export default class BorderLine extends Component {

    static propTypes = {
        position: PropTypes.oneOf([TOP, LEFT, RIGHT, BOTTOM]).isRequired,
        color: PropTypes.string.isRequired,
    };

    static defaultProps = {};

    render() {

        const {
            position,
            color,
            style,
            ...otherProps,
        } = this.props;

        const defaultStyle = {
            position: 'absolute',
            backgroundColor: color,
        };

        let computedStyle = {};

        switch (position) {
            case LEFT:
                computedStyle = {
                    ...defaultStyle,
                    top: '0',
                    left: '0',
                    width: '1px',
                    height: '100%',
                    WebkitTransform: 'scaleX(0.5)',
                    transform: 'scaleX(0.5)',
                    WebkitTransformOrigin: 'left',
                    transformOrigin: 'left',
                    ...style,
                };
                break;
            case RIGHT:
                computedStyle = {
                    ...defaultStyle,
                    right: '0',
                    top: '0',
                    width: '1px',
                    height: '100%',
                    WebkitTransform: 'scaleX(0.5)',
                    transform: 'scaleX(0.5)',
                    WebkitTransformOrigin: 'right',
                    transformOrigin: 'right',
                    ...style,
                };
                break;
            case TOP:
                computedStyle = {
                    ...defaultStyle,
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    WebkitTransform: 'scaleY(0.5)',
                    transform: 'scaleY(0.5)',
                    WebkitTransformOrigin: 'top',
                    transformOrigin: 'top',
                    ...style,
                };
                break;
            case BOTTOM:
                computedStyle = {
                    ...defaultStyle,
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    WebkitTransform: 'scaleY(0.5)',
                    transform: 'scaleY(0.5)',
                    WebkitTransformOrigin: 'bottom',
                    transformOrigin: 'bottom',
                    ...style,
                };
                break;
            default:
                break;
        }

        return <div style={computedStyle} {...otherProps}></div>
    }
}

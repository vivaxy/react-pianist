/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';

import HorizontalFlexItem from './HorizontalFlexItem';
import checkChildren from '../library/checkChildren';

export default class HorizontalFlexBox extends Component {

    static propTypes = {
        children: checkChildren(HorizontalFlexItem),
    };

    static defaultProps = {};

    render() {

        const boxStyle = {
            display: '-webkit-box',
            display: '-webkit-flex',
            display: 'flex',
        };

        const {
            children,
            style,
            ...otherProps
        } = this.props;

        return <div {...otherProps} style={{
            ...boxStyle,
            ...style,
        }}>
            {children}
        </div>
    }
}

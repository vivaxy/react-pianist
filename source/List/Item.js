/**
 * @since 2016-09-05 12:43
 * @author vivaxy
 */

import React, { Component, PropTypes, cloneElement } from 'react';

import { BorderBox, BorderLine } from '../BorderBox';
import colors from '../colors';

export default class Item extends Component {

    static propTypes = {};

    static defaultProps = {};

    render () {

        const defaultStyle = {
            paddingLeft: '15px',
        };

        const {
            _isLast,
            children,
            style,
            ...otherProps
        } = this.props;

        const computedStyle = {
            ...defaultStyle,
            ...style,
        };

        return <div style={computedStyle} {...otherProps}>
            <BorderBox>
                {_isLast ? null : <BorderLine position={'bottom'} color={colors.BORDER}/>}
                {children}
            </BorderBox>
        </div>
    }
}

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
            marginLeft: '15px',
        };

        const {
            _isLast,
            children,
            style,
            ...otherProps
        } = this.props;

        return <BorderBox {...otherProps} style={{
            ...defaultStyle,
            ...style,
        }}>
            {_isLast ? null : <BorderLine position={'bottom'} color={colors.BORDER}/>}
            {children}
        </BorderBox>
    }
}

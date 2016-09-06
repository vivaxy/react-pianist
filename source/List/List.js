/**
 * @since 2016-09-05 12:43
 * @author vivaxy
 */

import React, { Component, PropTypes, cloneElement } from 'react';

import { BorderBox, BorderLine } from '../BorderBox';
import Item from './Item';
import checkChildren from '../library/checkChildren';
import colors from '../colors';

export default class List extends Component {

    static propTypes = {
        children: checkChildren(Item),
    };

    static defaultProps = {};

    render () {

        const {
            children,
            style,
            ...otherProps
        } = this.props;

        return <BorderBox {...otherProps} style={{
            ...style,
        }}>
            <BorderLine position={'top'} color={colors.BORDER}/>
            {children.map((child, index) => {

                const _isLast = index === children.length - 1;

                return cloneElement(child, {
                    _isLast,
                    ...child.props,
                });
            })}
            <BorderLine position={'bottom'} color={colors.BORDER}/>
        </BorderBox>
    }
}

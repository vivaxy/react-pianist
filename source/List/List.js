/**
 * @since 2016-09-05 12:43
 * @author vivaxy
 */

import React, { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

import { BorderBox, BorderLine } from '../BorderBox';
import Item from './Item';
import checkChildren from '../library/checkChildren';
import childrenFilter from '../library/childrenFilter';
import colors from '../colors';

export default class List extends Component {

    static propTypes = {
        children: checkChildren(Item),
    };

    static defaultProps = {};

    render() {

        const {
            children,
            style,
            ...otherProps
        } = this.props;

        const _children = childrenFilter(children);

        return <BorderBox {...otherProps} style={{
            ...style,
        }}>
            <BorderLine position={'top'} color={colors.BORDER}/>
            {Children.map(_children, (child, index) => {

                const _isLast = index === _children.length - 1;

                return cloneElement(child, {
                    _isLast,
                    ...child.props,
                });
            })}
            <BorderLine position={'bottom'} color={colors.BORDER}/>
        </BorderBox>
    }
}

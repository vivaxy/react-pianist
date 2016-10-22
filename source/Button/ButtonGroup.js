/**
 * @since 2016-09-05 13:24
 * @author vivaxy
 */

import React, { Component, PropTypes, Children, cloneElement } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';
import checkChildren from '../library/checkChildren';
import childrenFilter from '../library/childrenFilter';
import colors from '../colors';
import Button from './Button';

export default class ButtonGroup extends Component {

    static propTypes = {
        children: checkChildren(Button),
        space: PropTypes.number,
    };

    static defaultProps = {
        space: 20,
    };

    render() {

        const defaultStyle = {
            textAlign: 'center',
        };

        const {
            children,
            style,
            space,
            ...otherProps,
        } = this.props;

        const computedStyle = {
            ...defaultStyle,
            ...style,
        };

        const childWithSpace = Children.map(childrenFilter(children), (child) => {
                return cloneElement(child, {
                    style: {
                        margin: `0 ${space}px`
                    }
                });
            }
        );

        return <div style={computedStyle} {...otherProps}>{childWithSpace}</div>
    }
}

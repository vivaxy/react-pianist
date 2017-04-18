/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HorizontalFlexItem extends Component {

    static propTypes = {
        flex: PropTypes.number,
        width: PropTypes.number,
    };

    static defaultProps = {};

    render() {

        const {
            flex,
            width,
            children,
            style,
            ...otherProps
        } = this.props;

        let childStyle = {};

        if (flex !== undefined) {
            if (flex === 0) {
                childStyle = {
                    WebkitBoxFlex: flex,
                    WebkitFlex: '0 1 auto',
                    flex: '0 1 auto',
                    ...style,
                }
            } else {
                childStyle = {
                    WebkitBoxFlex: flex,
                    WebkitFlex: flex,
                    flex: flex,
                    width: 0,
                    ...style,
                };
            }
        } else {
            childStyle = {
                width,
                ...style,
            };
        }

        return <div style={childStyle} {...otherProps}>
            {children}
        </div>
    }
}

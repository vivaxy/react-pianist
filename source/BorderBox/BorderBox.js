/**
 * @since 2016-09-02 16:29
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BorderBox extends Component {

    static propTypes = {};

    static defaultProps = {};

    render() {

        const {
            children,
            style,
            ...otherProps,
        } = this.props;

        const computedStyle = {
            position: 'relative',
            ...style,
        };

        return <div style={computedStyle} {...otherProps}>
            {children}
        </div>
    }

}

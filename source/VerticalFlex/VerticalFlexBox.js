/**
 * @since 2016-09-02 13:30
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';

export default class VerticalList extends Component {

    static propTypes = {};

    static defaultProps = {};

    render () {

        const boxStyle = {
            display: '-webkit-box',
            display: '-webkit-flex',
            display: 'flex',
            WebkitBoxOrient: 'vertical',
            WebkitBoxDirection: 'normal',
            WebkitFlexDirection: 'column',
            flexDirection: 'column',
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

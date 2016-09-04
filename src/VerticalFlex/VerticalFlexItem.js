/**
 * @since 2016-09-02 16:02
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';

export default class VerticalListItem extends Component {

    static propTypes = {
        flex: PropTypes.number,
        height: PropTypes.number,
    };

    componentDidMount () {
        warning(!this.props.flex || !this.props.height, i18n('flex', 'height'));
    }

    static defaultProps = {};

    render () {

        const {
            flex,
            height,
            children,
            style,
            ...otherProps
        } = this.props;

        let childStyle = {};

        if (flex !== undefined) {
            childStyle = {
                WebkitBoxFlex: flex,
                WebkitFlex: flex,
                flex: flex,
                ...style
            };
        } else {
            childStyle = {
                height,
                ...style
            };
        }

        return <div style={childStyle} {...otherProps}>
            {children}
        </div>
    }
}

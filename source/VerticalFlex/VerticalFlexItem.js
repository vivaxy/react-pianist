/**
 * @since 2016-09-02 16:02
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import * as i18n from '../config/i18n';

export default class VerticalFlexItem extends Component {

    static propTypes = {
        flex: PropTypes.number,
        height: PropTypes.number,
    };

    componentDidMount () {
        warning(this.props.flex === undefined || this.props.height === undefined, i18n.ONE_OR_THE_OTHER('flex', 'height'));
        warning(this.props.flex !== undefined || this.props.height !== undefined, i18n.MUST_DEFINE_ONE('flex', 'height'));
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
                height: 0,
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

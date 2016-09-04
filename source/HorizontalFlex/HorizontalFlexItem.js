/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import * as i18n from '../config/i18n';

export default class HorizontalListItem extends Component {

    static propTypes = {
        flex: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {};

    componentDidMount () {
        warning(this.props.flex === undefined || this.props.height === undefined, i18n.ONE_OR_THE_OTHER('flex', 'height'));
        warning(this.props.flex !== undefined || this.props.height !== undefined, i18n.MUST_DEFINE_ONE('flex', 'height'));
    }

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

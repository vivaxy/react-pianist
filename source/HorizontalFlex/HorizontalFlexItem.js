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
        width: PropTypes.number,
    };

    static defaultProps = {};

    componentDidMount () {

        const {
            width,
            flex,
        } = this.props;

        warning(flex === undefined || width === undefined, i18n.ONE_OR_THE_OTHER('flex', 'width'));
        warning(flex !== undefined || width !== undefined, i18n.MUST_DEFINE_ONE('flex', 'width'));
    }

    render () {

        const {
            flex,
            width,
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
                width,
                ...style
            };
        }

        return <div style={childStyle} {...otherProps}>
            {children}
        </div>
    }
}

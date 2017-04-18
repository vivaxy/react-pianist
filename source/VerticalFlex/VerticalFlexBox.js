/**
 * @since 2016-09-02 13:30
 * @author vivaxy
 */

import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import checkChildren from '../library/checkChildren';
import VerticalFlexItem from './VerticalFlexItem';

import './VerticalFlexBox.less';

export default class VerticalFlexBox extends Component {

    static propTypes = {
        children: checkChildren(VerticalFlexItem),
        className: PropTypes.string,
    };

    static defaultProps = {
        className: '',
    };

    render() {

        const {
            children,
            className,
            ...otherProps
        } = this.props;

        const _className = classNames('pianist-vertical-flex-box', className);

        return <div className={_className} {...otherProps}>
            {children}
        </div>
    }
}

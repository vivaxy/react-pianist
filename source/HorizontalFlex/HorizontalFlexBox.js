/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */


import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import checkChildren from '../library/checkChildren';
import HorizontalFlexItem from './HorizontalFlexItem';

import './HorizontalFlexBox.less';

export default class HorizontalFlexBox extends Component {

    static propTypes = {
        children: checkChildren(HorizontalFlexItem),
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

        const _className = classNames('pianist-horizontal-flex-box', className);

        return <div className={_className} {...otherProps}>
            {children}
        </div>
    }
}

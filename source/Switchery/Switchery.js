/**
 * @since 2016-09-06 09:13
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';
import colors from '../colors';
import '../assets/less/Switchery/index.less';

export default class Switchery extends Component {

    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
    };

    static defaultProps = {
        checked: true,
        disabled: false,
        onChange: () => {

        },
    };

    render() {

        const {
            checked,
            disabled,
            style,
            onChange,
            ...otherProps,
        } = this.props;

        return <input
            type={'checkbox'}
            disabled={disabled}
            checked={checked}
            style={style}
            className={`react-pianist-switchery`}
            onChange={::this.onChange}
            {...otherProps}
        />
    }

    onChange(e) {
        const {
            onChange,
        } = this.props;

        return onChange(e.target.checked);
    }
}

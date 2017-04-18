/**
 * @since 2016-09-04 09:34
 * @author vivaxy
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import sleep from '../library/sleep';
import colors from '../colors';

export default class Toast extends Component {

    state = {
        show: false,
    };

    static propTypes = {
        show: PropTypes.bool,
        animationDuration: PropTypes.number,
        top: PropTypes.number,
    };

    static defaultProps = {
        show: false,
        animationDuration: 300,
        top: 50,
    };

    componentWillReceiveProps (nextProps) {
        if (nextProps.show) {
            this.clearTimeout();
            this.showToast();
        } else {
            this.closeToast();
        }
    }

    clearTimeout () {
        if (this._animationTimeout) {
            clearTimeout(this._animationTimeout);
        }
    }

    async closeToast () {
        this._root.style.opacity = '0';
        await sleep(this.props.animationDuration, (timer) => {
            this._animationTimeout = timer;
        });
        this.setState({
            show: false,
        });
    }

    async showToast () {
        this.setState({
            show: true,
        });
        await sleep(0);
        this._root.style.opacity = '1';
    }

    render () {

        const TRANSFORM = `translate3d(-50%, -50%, 0)`;

        const {
            children,
            top,
            style,
            show: showProp,
            animationDuration,
            ...otherProps,
        } = this.props;

        const {
            show,
        } = this.state;

        const defaultStyle = {
            display: 'none',
            position: 'fixed',
            left: '50%',
            transform: TRANSFORM,
            WebkitTransform: TRANSFORM,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '4px',
            zIndex: '999',
            opacity: '0',
            padding: '8px 12px',
            WebkitTransition: `opacity ${animationDuration}ms`,
            transition: `opacity ${animationDuration}ms`,
            color: colors.WHITE,
            fontSize: '14px',
        };

        const computedStyle = {
            ...defaultStyle,
            top: `${top}%`,
            ...style,
        };

        if (show) {
            computedStyle.display = 'block';
        }

        return <div style={computedStyle} {...otherProps} ref={(ref) => {
            this._root = ref;
        }}>
            {children}
        </div>
    }
}

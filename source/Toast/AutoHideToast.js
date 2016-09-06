/**
 * @since 2016-09-06 13:57
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import sleep from '../library/sleep';
import i18n from '../config/i18n';
import colors from '../colors';

export default class AutoHideToast extends Component {

    state = {
        show: false,
    };

    static propTypes = {
        animationDuration: PropTypes.number,
        show: PropTypes.bool,
        autoHideDuration: PropTypes.number,
        top: PropTypes.number,
        onAutoHide: PropTypes.func,
    };

    static defaultProps = {
        show: false,
        animationDuration: 300,
        autoHideDuration: 3000,
        top: 50,
        onAutoHide: () => {

        }
    };

    componentWillMount () {
        this.setState({
            show: this.props.show,
        });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.show) {
            if (this.state.show) {
                this.clearTimeout();
                // this.props.onAutoHide();
            }
            this.showToast();
        } else {
            if (this.state.show) {
                this.clearTimeout();
                this.hideToast();
            }
        }
    }

    clearTimeout () {
        clearTimeout(this._timeout);
        clearTimeout(this._animationTimeout);
    }

    async hideToast () {
        this._root.style.opacity = '0';
        await sleep(this.props.animationDuration, (timer) => {
            this._animationTimeout = timer;
        });
        this.setState({
            show: false,
        });
        this.props.onAutoHide();
    }

    async showToast () {
        this.setState({
            show: true,
        });
        await sleep(0);
        this._root.style.opacity = '1';
        await sleep(this.props.autoHideDuration, (timer) => {
            this._timeout = timer;
        });
        await this.hideToast();
    }

    render () {

        const TRANSFORM = `translate3d(-50%, -50%, 0)`;

        const {
            children,
            top,
            style,
            show: showProps,
            autoHideDuration,
            animationDuration,
            onAutoHide,
            ...otherProps,
        } = this.props;

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

        const {
            show,
        } = this.state;

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

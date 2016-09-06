/**
 * @since 2016-09-04 09:34
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import sleep from '../library/sleep';
import i18n from '../config/i18n';
import colors from '../colors';

/**
 * should not support close callback:
 *      if you want to know the toast is closed, you should use controlled toast, ie set `autoHide` as false.
 */
export default class Toast extends Component {

    state = {
        show: false,
    };

    static propTypes = {
        animationDuration: PropTypes.number,
        show: PropTypes.bool,
        autoHideDuration: PropTypes.number,
        top: PropTypes.number,
        autoHide: PropTypes.bool,
    };

    static defaultProps = {
        show: false,
        autoHide: true,
        animationDuration: 300,
        autoHideDuration: 3000,
        top: 50,
    };

    componentWillMount () {
        this.setState({
            show: this.props.show,
        });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.show) {
            if (this.state.show) {
                // close toast
                this.closeToast({
                    immediate: true,
                });
            }
            this.showToast();
        } else {
            this.closeToast();
        }
    }

    async closeToast ({
        immediate,
    } = {
        immediate: false,
    }) {
        if (this.state.show) {
            if (this._timeout) {
                clearTimeout(this._timeout);
            }
            if (this._animationTimeout) {
                clearTimeout(this._animationTimeout);
            }
            if (!immediate) {
                this._root.style.opacity = '0';
                this._animationTimeout = await sleep(this.props.animationDuration);
                this.setState({
                    show: false,
                });
            }
        }
    }

    async showToast () {
        if (this._timeout) {
            clearTimeout(this._timeout);
        }
        if (this._animationTimeout) {
            clearTimeout(this._animationTimeout);
        }
        this.setState({
            show: true,
        });
        await sleep(0);
        this._root.style.opacity = '1';
        if (this.props.autoHide) {
            this._timeout = await sleep(this.props.autoHideDuration);
            this.closeToast();
        }
    }

    render () {

        const TRANSFORM = `translate3d(-50%, -50%, 0)`;

        const {
            children,
            top,
            style,
            show: showProps,
            autoHide,
            autoHideDuration,
            animationDuration,
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

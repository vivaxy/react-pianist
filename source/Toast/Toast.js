/**
 * @since 2016-09-04 09:34
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';
import warning from 'warning';

import i18n from '../config/i18n';
import colors from '../colors';

export default class Toast extends Component {

    state = {
        open: false,
    };

    static propTypes = {
        animationDuration: PropTypes.number,
        open: PropTypes.bool.isRequired,
        autoHide: PropTypes.bool,
        autoHideDuration: PropTypes.number,
        top: PropTypes.number,
    };

    static defaultProps = {
        autoHide: true,
        animationDuration: 300,
        autoHideDuration: 3000,
        top: 50,
    };

    componentWillMount () {
        this.setState({
            open: this.props.open,
        });
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.open) {
            if (this.state.open) {
                // close toast
                if (this._timeout) {
                    clearTimeout(this._timeout);
                    this.setState({
                        open: false,
                    });
                }
                if (this._animationTimeout) {
                    clearTimeout(this._animationTimeout);
                }
            }
            this.setState({
                open: true,
            });
            setTimeout(() => {
                this._root.style.opacity = '1';
                if (this.props.autoHide) {
                    this._timeout = setTimeout(() => {
                        this._root.style.opacity = '0';
                        this._animationTimeout = setTimeout(() => {
                            this.setState({
                                open: false,
                            });
                        }, this.props.animationDuration);
                    }, this.props.autoHideDuration);
                }
            }, 0);
        } else {
            this.setState({
                open: false,
            });
        }
    }

    render () {

        const {
            children,
            top,
            style,
            autoHideDuration,
            animationDuration,
            ...otherProps,
        } = this.props;

        const defaultStyle = {
            display: 'none',
            position: 'fixed',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)',
            WebkitTransform: 'translate3d(-50%, -50%, 0)',
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
            open,
        } = this.state;

        const computedStyle = {
            ...defaultStyle,
            top: `${top}%`,
            ...style,
        };

        if (open) {
            computedStyle.display = 'block';
        }

        return <div style={computedStyle} {...otherProps} ref={(ref) => {
            this._root = ref;
        }}>
            {children}
        </div>
    }
}

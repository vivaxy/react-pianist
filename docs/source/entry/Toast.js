/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';
import sleep from '../library/sleep';
import action from '../action';

import Toast from 'react-pianist/Toast';
import colors from 'react-pianist/colors';
import { Button } from 'react-pianist/Button';

@connect(state => ({
    toastState: state.toast,
}), {
    showToastAction: action.toast.showToast,
    hideToastAction: action.toast.hideToast,
})
class ToastDemo extends Component {

    state = {
        controlledToastShown: false,
    };

    render () {

        setTitle(`Toast`);

        const {
            controlledToastShown,
        } = this.state;

        const {
            toastState,
        } = this.props;

        return <div>
            <div style={{
                textAlign: 'center',
                marginTop: '20px',
            }}>
                <Button onClick={::this.toast}>TOAST</Button>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '20px',
            }}>
                <Button onClick={::this.toastAnother}>TOAST ANOTHER</Button>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '20px',
            }}>
                <Button onClick={::this.showControlledToast}>SHOW CONTROLLED TOAST</Button>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '20px',
            }}>
                <Button onClick={::this.hideControlledToast}>HIDE CONTROLLED TOAST</Button>
            </div>
            <Toast show={toastState.show}>{toastState.message}</Toast>
            <Toast autoHide={false} show={controlledToastShown} style={{
                width: '220px',
                textAlign: 'center',
            }}>{`THIS IS A CONTROLLED TOAST`}</Toast>
        </div>
    }

    async toast () {
        const {
            showToastAction,
            hideToastAction,
        } = this.props;
        hideToastAction();
        showToastAction('test toast');
        await sleep(3300);
        hideToastAction();
    }

    async toastAnother () {
        const {
            showToastAction,
            hideToastAction,
        } = this.props;
        hideToastAction();
        showToastAction('test another toast');
        await sleep(3300);
        hideToastAction();
    }

    showControlledToast () {
        this.setState({
            controlledToastShown: true,
        });
    }

    hideControlledToast () {
        this.setState({
            controlledToastShown: false,
        });
    }

}

render(ToastDemo);

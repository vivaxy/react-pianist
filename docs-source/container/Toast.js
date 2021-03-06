/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import setTitle from '../library/setTitle';
import action from '../action';

import Toast, { AutoHideToast } from 'react-pianist/Toast';
import { Button } from 'react-pianist/Button';

class ToastDemo extends Component {

    state = {
        controlledToastShown: false,
    };

    render() {

        setTitle(`Toast`);

        const {
            controlledToastShown,
        } = this.state;

        const {
            toastShow,
            toastMessage,
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
            <AutoHideToast show={toastShow} onAutoHide={::this.onToastHide}>{toastMessage}</AutoHideToast>
            <Toast
                show={controlledToastShown}
                style={{
                    width: '220px',
                    textAlign: 'center',
                }}
            >{`THIS IS A CONTROLLED TOAST`}</Toast>
        </div>
    }

    toast() {
        const {
            showToastAction,
        } = this.props;
        showToastAction('TEST TOAST');
    }

    toastAnother() {
        const {
            showToastAction,
        } = this.props;
        showToastAction('TEST ANOTHER TOAST');
    }

    showControlledToast() {
        this.setState({
            controlledToastShown: true,
        });
    }

    hideControlledToast() {
        this.setState({
            controlledToastShown: false,
        });
    }

    onToastHide() {
        const {
            hideToastAction,
        } = this.props;

        console.log('hide');
        hideToastAction();

    }

}

export default connect(state => ({
    toastShow: state.toast.show,
    toastMessage: state.toast.message,
}), {
    showToastAction: action.toast.showToast,
    hideToastAction: action.toast.hideToast,
})(ToastDemo);

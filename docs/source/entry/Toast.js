/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';
import action from '../action';

import Toast from 'react-pianist/Toast';
import colors from 'react-pianist/colors';
import { Button } from 'react-pianist/Button';

@connect(state => ({
    toastState: state.toast,
}), {
    showToastAction: action.toast.showToast,
})
class ToastDemo extends Component {

    render () {

        setTitle(`Toast`);

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
            <Toast open={toastState.show}>{toastState.message}</Toast>
        </div>
    }

    toast () {
        const {
            showToastAction,
        } = this.props;
        showToastAction('test toast');
    }

    toastAnother () {
        const {
            showToastAction,
        } = this.props;
        showToastAction('test another toast');
    }

}

render(ToastDemo);

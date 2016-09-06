/**
 * @since 2016-09-06 14:36
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';
import sleep from '../library/sleep';
import action from '../action';

import Toast, { AutoHideToast } from 'react-pianist/Toast';
import colors from 'react-pianist/colors';
import { Button } from 'react-pianist/Button';

@connect(state => ({
    toastState: state.toast,
}), {
    showToastAction: action.toast.showToast,
    hideToastAction: action.toast.hideToast,
})
class Index extends Component {

    render () {

        return <div>
            <button onClick={::this.setTimeout}>set timeout</button>
            <button onClick={::this.clearTimeout}>clear timeout</button>
        </div>
    }

    async setTimeout () {
        console.log('0ms');
        await sleep(5000, (timer) => {
            this._timer = timer;
        });
        console.log('5000ms');
    }

    clearTimeout () {
        console.log(this._timer);
        clearTimeout(this._timer);
    }

}

render(Index);

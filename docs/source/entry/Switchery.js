/**
 * @since 2016-09-06 08:40
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';
import action from '../action';

import Switchery from 'react-pianist/Switchery';
import Toast from 'react-pianist/Toast';
import colors from 'react-pianist/colors';

import i18n from '../i18n';

@connect(state => ({
    toastState: state.toast,
}), {
    showToastAction: action.toast.showToast,
})
class SwitcheryDemo extends Component {

    state = {
        firstSwitcheryChecked: true,
        secondSwitcheryChecked: false,
    };

    render () {

        setTitle(`Switchery`);

        const {
            toastState,
        } = this.props;

        const {
            firstSwitcheryChecked,
            secondSwitcheryChecked,
        } = this.state;

        return <div>
            <Switchery checked={firstSwitcheryChecked} disabled={false} onChange={::this.onChange(1)}/>
            <Switchery checked={secondSwitcheryChecked} disabled={false} onChange={::this.onChange(2)}/>
            <Switchery checked={true} disabled={true} onChange={::this.onChange}/>
            <Switchery checked={false} disabled={true} onChange={::this.onChange}/>
            <Toast show={toastState.show}>{toastState.message}</Toast>
        </div>
    }

    onChange (which) {
        return (checked) => {

            const {
                showToastAction,
            } = this.props;
            showToastAction(String(checked));
            if (which === 1) {
                this.setState({
                    firstSwitcheryChecked: checked,
                });
            }
            if (which === 2) {
                this.setState({
                    secondSwitcheryChecked: checked,
                });
            }
        }
    }

}

render(SwitcheryDemo);

/**
 * @since 2016-09-06 08:40
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import setTitle from '../library/setTitle';
import action from '../action';

import Switchery from 'react-pianist/Switchery';
import { AutoHideToast } from 'react-pianist/Toast';

class SwitcheryDemo extends Component {

    state = {
        firstSwitcheryChecked: true,
        secondSwitcheryChecked: false,
    };

    render() {

        setTitle(`Switchery`);

        const {
            toastShow,
            toastMessage,
        } = this.props;

        const {
            firstSwitcheryChecked,
            secondSwitcheryChecked,
        } = this.state;

        return <div>
            <Switchery
                checked={firstSwitcheryChecked}
                disabled={false}
                onChange={::this.onChange(`firstSwitcheryChecked`)}/>
            <Switchery
                checked={secondSwitcheryChecked}
                disabled={false}
                onChange={::this.onChange(`secondSwitcheryChecked`)}/>
            <Switchery checked={true} disabled={true}/>
            <Switchery checked={false} disabled={true}/>
            <AutoHideToast show={toastShow}>{toastMessage}</AutoHideToast>
        </div>
    }

    onChange(which) {
        return (checked) => {

            const {
                showToastAction,
            } = this.props;
            showToastAction(String(checked));
            this.setState({
                [which]: checked,
            });
        }
    }

}

export default connect(state => ({
    toastShow: state.toast.show,
    toastMessage: state.toast.message,
}), {
    showToastAction: action.toast.showToast,
})(SwitcheryDemo);

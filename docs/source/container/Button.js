/**
 * @since 2016-09-06 08:40
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import setTitle from '../library/setTitle';

import { Button, ButtonGroup } from 'react-pianist/Button';
import colors from 'react-pianist/colors';

import i18n from '../i18n';

class ButtonDemo extends Component {

    render() {

        setTitle(`Button`);

        return <div>
            <ButtonGroup style={{marginTop: '20px',}}>
                <Button width={96} primary={false}>{i18n.CANCEL}</Button>
                <Button width={96}>{i18n.CONFIRM}</Button>
            </ButtonGroup>
            <ButtonGroup style={{marginTop: '20px',}}>
                <Button width={96} primary={false} disabled={true}>{i18n.CANCEL}</Button>
                <Button width={96} disabled={true}>{i18n.CONFIRM}</Button>
            </ButtonGroup>
        </div>
    }

}

export default connect(state => ({}), {})(ButtonDemo);

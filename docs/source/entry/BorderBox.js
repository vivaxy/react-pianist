/**
 * @since 2016-09-04 11:08
 * @author vivaxy
 */


import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';

import { BorderBox, BorderLine } from 'react-pianist/BorderBox';
import colors from 'react-pianist/colors';

@connect(state => ({}), {})
class BorderBoxDemo extends Component {

    render () {

        setTitle(`BorderBox`);

        return <BorderBox style={{
            width: '100px',
            height: '100px',
            backgroundColor: colors.ABOUT_WHITE,
            color: colors.ABOUT_BLACK,
            margin: '10px auto',
        }}>
            <BorderLine color={colors.BORDER} position={'top'}/>
            <BorderLine color={colors.BORDER} position={'bottom'}/>
            <BorderLine color={colors.BORDER} position={'left'}/>
            <BorderLine color={colors.BORDER} position={'right'}/>
            <div>
                there are lines around
            </div>
        </BorderBox>
    }

}

render(BorderBoxDemo);

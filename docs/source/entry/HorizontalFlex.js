/**
 * @since 2016-09-04 11:07
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';

import { HorizontalFlexBox, HorizontalFlexItem } from 'react-pianist/HorizontalFlex';
import colors from 'react-pianist/colors';

@connect(state => ({}), {})
class HorizontalFlex extends Component {

    render () {

        setTitle(`HorizontalFlex`);

        return <HorizontalFlexBox style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
        }}>
            <HorizontalFlexItem
                flex={1}
                style={{
                    backgroundColor: colors.TURQUOISE,
                    color: colors.WHITE,
                    lineHeight: '50px',

                }}
            >this block auto expand</HorizontalFlexItem>
            <HorizontalFlexItem
                flex={1}
                style={{
                    backgroundColor: colors.EMERALD,
                    color: colors.WHITE,
                    lineHeight: '50px',
                }}
            >this block auto expand too</HorizontalFlexItem>
        </HorizontalFlexBox>
    }

}

render(HorizontalFlex);

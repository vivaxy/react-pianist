/**
 * @since 2016-09-04 10:20
 * @author vivaxy
 */

import React, { Component } from 'react';

import connect from '../library/connect';
import render from '../library/render';
import setTitle from '../library/setTitle';

import { VerticalFlexBox, VerticalFlexItem } from 'react-pianist/VerticalFlex';
import colors from 'react-pianist/colors';

@connect(state => ({}), {})
class VerticalFlex extends Component {

    render () {

        setTitle(`VerticalFlexBox`);

        return <VerticalFlexBox style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
        }}>
            <VerticalFlexItem
                flex={1}
                style={{
                    backgroundColor: colors.TURQUOISE,
                }}
            >this block auto expand</VerticalFlexItem>
            <VerticalFlexItem
                height={50}
                style={{
                    backgroundColor: colors.EMERALD,
                }}
            >this block will not expand</VerticalFlexItem>
        </VerticalFlexBox>
    }

}

render(VerticalFlex);

/**
 * @since 2016-09-04 09:19
 * @author vivaxy
 */

import React, { Component } from 'react';
import { List, Item } from 'react-pianist/List';
import colors from 'react-pianist/colors';

import connect from '../library/connect';
import render from '../library/render';
import redirect from '../library/redirect';

@connect(state => ({}), {})
class ListDemo extends Component {

    render () {

        const componentList = [
            'VerticalFlex',
            'HorizontalFlex',
            'BorderBox',
            'Toast',
            'List',
            'Button',
            'Switchery',
        ];

        const itemStyle = {
            height: '46px',
            lineHeight: '46px',
            textIndent: '15px',
            color: colors.ABOUT_BLACK,
        };

        return <List>
            {componentList.map((component, index) => {
                return <Item
                    key={`component-${index}`}
                    onClick={::this.redirect(component)}
                    style={itemStyle}
                >{component}</Item>
            })}
        </List>
    }

    redirect (component) {
        return () => {
            redirect(`/${component}.html`);
        }
    }

}

render(ListDemo);

/**
 * @since 2016-09-04 09:19
 * @author vivaxy
 */

import React, { Component } from 'react';
import { List, Item } from 'react-pianist/List';

import connect from '../library/connect';
import render from '../library/render';
import redirect from '../library/redirect';

@connect(state => ({}), {})
class Index extends Component {

    render () {

        const componentList = [
            'VerticalFlex',
            'HorizontalFlex',
            'BorderBox',
            'Toast',
        ];

        const itemStyle = {
            height: '46px',
            lineHeight: '46px',
            paddingLeft: '15px',
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

render(Index);

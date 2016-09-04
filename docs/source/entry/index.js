/**
 * @since 2016-09-04 09:19
 * @author vivaxy
 */

import React, { Component } from 'react';

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

        return <div>
            {componentList.map((component, index) => {
                return <div key={`component-${index}`} onClick={::this.redirect(component)}>{component}</div>
            })}
        </div>
    }

    redirect (component) {
        return () => {
            redirect(`/${component}.html`);
        }
    }

}

render(Index);

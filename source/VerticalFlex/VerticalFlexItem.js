/**
 * @since 2016-09-02 16:02
 * @author vivaxy
 */

import React, { Component, PropTypes } from 'react';

import '../assets/less/VerticalFlex/VerticalFlexItem.less';

export default class VerticalFlexItem extends Component {

    static propTypes = {
        flex: PropTypes.number,
        height: PropTypes.number,
    };

    static defaultProps = {};

    render() {

        const {
            flex,
            height,
            children,
            style,
            ...otherProps
        } = this.props;

        let childStyle = {};

        if (flex !== undefined) {
            if (flex === 0) {
                childStyle = {
                    WebkitBoxFlex: flex,
                    WebkitFlex: '0 1 auto',
                    flex: '0 1 auto',
                    ...style,
                }
            } else {
                childStyle = {
                    WebkitBoxFlex: flex,
                    WebkitFlex: flex,
                    flex: flex,
                    height: 0,
                    ...style
                };
            }
        } else {
            childStyle = {
                height,
                ...style
            };
        }

        return <div style={childStyle} {...otherProps}>
            {children}
        </div>
    }
}

/**
 * @since 2016-10-21 19:17
 * @author vivaxy
 */

import { Children, isValidElement } from 'react';

export default (children) => {
    return Children.map(children, (child) => {
        return child;
    });
};

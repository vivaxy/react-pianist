/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import { Children } from 'react';

import childrenFilter from './childrenFilter';

export default (ChildClass) => {
    return (props, propName, parentName) => {
        const prop = props[propName];
        let error = null;
        Children.forEach(childrenFilter(prop), (child) => {
            if (child.type.name !== ChildClass.name) {
                error = new Error(`Component '${parentName}' should only have children of '${ChildClass.name}' type`);
            }
        });
        return error;
    }
}

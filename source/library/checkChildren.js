/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import { Children } from 'react';

export default (ChildClass) => {
    return (props, propName, parentName) => {
        const prop = props[propName];
        let error = null;
        Children.forEach(prop, (child) => {
            if (child.type !== ChildClass) {
                error = new Error(`Component '${parentName}' should only have children of '${ChildClass.name}' type`);
            }
        });
        return error;
    }
}

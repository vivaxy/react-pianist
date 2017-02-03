/**
 * @since 2016-09-02 14:43
 * @author vivaxy
 */

import warning from 'warning';
import { Children } from 'react';

import * as i18n from '../config/i18n';
import childrenFilter from './childrenFilter';

export default (childClass) => {
    return (props, propName, parentName) => {
        const children = props[propName];
        Children.forEach(childrenFilter(children), (child) => {
            // support null as children
            if (child.type.name !== childClass.name) {
                warning(child.type.name === childClass.name, i18n.$INVALID_CHILDREN_TYPE(parentName, childClass.name));
            }
        });
        return null;
    }
}

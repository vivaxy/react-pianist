/**
 * @since 2016-09-04 09:07
 * @author vivaxy
 */

export const $ONE_OR_THE_OTHER = (...propNames) => {
    return `Properties ${propNames.join(' and ')} cannot be defined both. Please use one or the other.`
};

export const $MUST_DEFINE_ONE = (...propNames) => {
    return `Properties ${propNames.join(' or ')} must be defined.`
};

export const $INVALID_CHILDREN_TYPE = (parentName, childName) => {
    return `Component '${parentName}' should only have children of '${childName}' type.`
};

/**
 * @since 2016-09-04 09:07
 * @author vivaxy
 */

export const ONE_OR_THE_OTHER = (...propNames) => {
    return `Properties ${propNames.join(' and ')} cannot be simultaneously defined. Please use one or the other.`
};

export const MUST_DEFINE_ONE = (...propNames) => {
    return `Properties ${propNames.join(' or ')} must be defined.`
};

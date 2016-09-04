/**
 * @since 2016-09-04 09:07
 * @author vivaxy
 */

export default (...propNames) => {
    return `Properties ${propNames.join(' and ')} cannot be simultaneously defined. Please use one or the other.`
};

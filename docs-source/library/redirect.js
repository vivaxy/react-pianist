/**
 * @since 2016-09-04 10:36
 * @author vivaxy
 */

import env from './environment';
import * as environment from '../config/environment';

const DEVELOPMENT_PATH_SUFFIX = '/html';
const PRODUCTION_PATH_SUFFIX = '/react-pianist/html';

export default (path) => {
    let realPath;
    switch (env) {
        case environment.DEVELOPMENT:
            realPath = `${DEVELOPMENT_PATH_SUFFIX}${path}`;
            break;
        default:
            realPath = `${PRODUCTION_PATH_SUFFIX}${path}`;
            break;
    }
    location.href = realPath;
};

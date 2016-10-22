/**
 * @since 2016-06-11 15:43
 * @author vivaxy
 */

import * as environmentConstant from '../config/environment';

let env = environmentConstant.PRODUCTION;

let host = location.host;

if (host === '127.0.0.1:8085') {
    env = environmentConstant.DEVELOPMENT;
}

export default env;

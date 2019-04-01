'use strict';
import CrwLogger from "../../../app/logging/crw_logger";

require('global_root/jest/__support__/config');

describe('Logger', ()=>{
  it('.info, .error', () => {
    CrwLogger.info('before', {"n": 1});
    CrwLogger.error(new Error('fake'), {"n": 2});
    CrwLogger.info('done', {"n": 3});
    CrwLogger.error(new Error('fake'), {"n": 4});
  });
});
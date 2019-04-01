import CrwLogger from "../../app/logging/crw_logger";

const JestSupportConfig = {
  logger: {
    output: false,
    networkEnabled: false
  },
  prepare: ()=> {
    CrwLogger.output = JestSupportConfig.logger.output;
    CrwLogger.networkEnabled = JestSupportConfig.logger.networkEnabled;
  }
};

JestSupportConfig.prepare();

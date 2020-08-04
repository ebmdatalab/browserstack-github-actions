import BaseHandler from './baseHandler';
import constants from '../../config/constants';

const { BINARY_PATHS: { WINDOWS } } = constants;

class WindowsHandler extends BaseHandler {
  constructor() {
    super();
    this.platform = 'windows';
    this.toolName = 'BrowserStackLocal';
  }

  async downloadBinary() {
    console.log('INSIDE WINDOWS HANDLER TO DOWNLOAD...');
    await super.downloadBinary(WINDOWS);
  }

  getBinaryPath() {
    return this.binaryPath;
  }
}

export default WindowsHandler;

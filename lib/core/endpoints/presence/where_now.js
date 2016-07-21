'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOperation = getOperation;
exports.validateParams = validateParams;
exports.getURL = getURL;
exports.prepareParams = prepareParams;
exports.handleResponse = handleResponse;

var _flow_interfaces = require('../../flow_interfaces');

function getOperation() {
  return 'PNWhereNowOperation';
}

function validateParams(modules) {
  var config = modules.config;


  if (!config.subscribeKey) return 'Missing Subscribe Key';
}

function getURL(modules, incomingParams) {
  var config = modules.config;
  var _incomingParams$uuid = incomingParams.uuid;
  var uuid = _incomingParams$uuid === undefined ? config.UUID : _incomingParams$uuid;

  return '/v2/presence/sub-key/' + config.subscribeKey + '/uuid/' + uuid;
}

function prepareParams() {
  return {};
}

function handleResponse(modules, serverResponse) {
  return { channels: serverResponse.payload.channels };
}
//# sourceMappingURL=where_now.js.map
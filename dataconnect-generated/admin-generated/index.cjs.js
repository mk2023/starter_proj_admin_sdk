const { validateAdminArgs } = require('firebase-admin/data-connect');

const connectorConfig = {
  connector: 'default-connector',
  serviceId: 'starterproject',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

function getAllRuns(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetAllRuns', undefined, inputOpts);
}
exports.getAllRuns = getAllRuns;

function getAllRestaurants(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetAllRestaurants', undefined, inputOpts);
}
exports.getAllRestaurants = getAllRestaurants;

function getAllRunsAndRestaurants(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetAllRunsAndRestaurants', undefined, inputOpts);
}
exports.getAllRunsAndRestaurants = getAllRunsAndRestaurants;

function getMileage(dcOrOptions, options) {
  const { dc: dcInstance, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrOptions, options, undefined);
  dcInstance.useGen(true);
  return dcInstance.executeQuery('GetMileage', undefined, inputOpts);
}
exports.getMileage = getMileage;

function addRun(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AddRun', inputVars, inputOpts);
}
exports.addRun = addRun;

function addRestaurant(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('AddRestaurant', inputVars, inputOpts);
}
exports.addRestaurant = addRestaurant;

function markRestaurantVisited(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('MarkRestaurantVisited', inputVars, inputOpts);
}
exports.markRestaurantVisited = markRestaurantVisited;

function unmarkRestaurantVisited(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UnmarkRestaurantVisited', inputVars, inputOpts);
}
exports.unmarkRestaurantVisited = unmarkRestaurantVisited;

function deleteRestaurant(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('deleteRestaurant', inputVars, inputOpts);
}
exports.deleteRestaurant = deleteRestaurant;

function updateMileageAfterRun(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('UpdateMileageAfterRun', inputVars, inputOpts);
}
exports.updateMileageAfterRun = updateMileageAfterRun;

function createMileage(dcOrVarsOrOptions, varsOrOptions, options) {
  const { dc: dcInstance, vars: inputVars, options: inputOpts} = validateAdminArgs(connectorConfig, dcOrVarsOrOptions, varsOrOptions, options, true, true);
  dcInstance.useGen(true);
  return dcInstance.executeMutation('CreateMileage', inputVars, inputOpts);
}
exports.createMileage = createMileage;


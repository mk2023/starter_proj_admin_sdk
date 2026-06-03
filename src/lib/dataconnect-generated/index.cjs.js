const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default-connector',
  service: 'starterproject',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const getAllRunsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllRuns');
}
getAllRunsRef.operationName = 'GetAllRuns';
exports.getAllRunsRef = getAllRunsRef;

exports.getAllRuns = function getAllRuns(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllRunsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAllRestaurantsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllRestaurants');
}
getAllRestaurantsRef.operationName = 'GetAllRestaurants';
exports.getAllRestaurantsRef = getAllRestaurantsRef;

exports.getAllRestaurants = function getAllRestaurants(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllRestaurantsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getAllRunsAndRestaurantsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllRunsAndRestaurants');
}
getAllRunsAndRestaurantsRef.operationName = 'GetAllRunsAndRestaurants';
exports.getAllRunsAndRestaurantsRef = getAllRunsAndRestaurantsRef;

exports.getAllRunsAndRestaurants = function getAllRunsAndRestaurants(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getAllRunsAndRestaurantsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getMileageRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMileage');
}
getMileageRef.operationName = 'GetMileage';
exports.getMileageRef = getMileageRef;

exports.getMileage = function getMileage(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getMileageRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const addRunRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRun', inputVars);
}
addRunRef.operationName = 'AddRun';
exports.addRunRef = addRunRef;

exports.addRun = function addRun(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addRunRef(dcInstance, inputVars));
}
;

const addRestaurantRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddRestaurant', inputVars);
}
addRestaurantRef.operationName = 'AddRestaurant';
exports.addRestaurantRef = addRestaurantRef;

exports.addRestaurant = function addRestaurant(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addRestaurantRef(dcInstance, inputVars));
}
;

const markRestaurantVisitedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'MarkRestaurantVisited', inputVars);
}
markRestaurantVisitedRef.operationName = 'MarkRestaurantVisited';
exports.markRestaurantVisitedRef = markRestaurantVisitedRef;

exports.markRestaurantVisited = function markRestaurantVisited(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(markRestaurantVisitedRef(dcInstance, inputVars));
}
;

const unmarkRestaurantVisitedRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UnmarkRestaurantVisited', inputVars);
}
unmarkRestaurantVisitedRef.operationName = 'UnmarkRestaurantVisited';
exports.unmarkRestaurantVisitedRef = unmarkRestaurantVisitedRef;

exports.unmarkRestaurantVisited = function unmarkRestaurantVisited(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(unmarkRestaurantVisitedRef(dcInstance, inputVars));
}
;

const deleteRestaurantRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'deleteRestaurant', inputVars);
}
deleteRestaurantRef.operationName = 'deleteRestaurant';
exports.deleteRestaurantRef = deleteRestaurantRef;

exports.deleteRestaurant = function deleteRestaurant(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteRestaurantRef(dcInstance, inputVars));
}
;

const updateMileageAfterRunRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateMileageAfterRun', inputVars);
}
updateMileageAfterRunRef.operationName = 'UpdateMileageAfterRun';
exports.updateMileageAfterRunRef = updateMileageAfterRunRef;

exports.updateMileageAfterRun = function updateMileageAfterRun(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateMileageAfterRunRef(dcInstance, inputVars));
}
;

const createMileageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMileage', inputVars);
}
createMileageRef.operationName = 'CreateMileage';
exports.createMileageRef = createMileageRef;

exports.createMileage = function createMileage(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createMileageRef(dcInstance, inputVars));
}
;

const deleteAllDataRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteAllData');
}
deleteAllDataRef.operationName = 'DeleteAllData';
exports.deleteAllDataRef = deleteAllDataRef;

exports.deleteAllData = function deleteAllData(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(deleteAllDataRef(dcInstance, inputVars));
}
;

const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default-connector',
  service: 'starterproject',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const getAllRunsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllRuns', inputVars);
}
getAllRunsRef.operationName = 'GetAllRuns';
exports.getAllRunsRef = getAllRunsRef;

exports.getAllRuns = function getAllRuns(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
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

const getAllRunsAndRestaurantsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetAllRunsAndRestaurants', inputVars);
}
getAllRunsAndRestaurantsRef.operationName = 'GetAllRunsAndRestaurants';
exports.getAllRunsAndRestaurantsRef = getAllRunsAndRestaurantsRef;

exports.getAllRunsAndRestaurants = function getAllRunsAndRestaurants(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getAllRunsAndRestaurantsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getVisitedRestaurantsRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetVisitedRestaurants', inputVars);
}
getVisitedRestaurantsRef.operationName = 'GetVisitedRestaurants';
exports.getVisitedRestaurantsRef = getVisitedRestaurantsRef;

exports.getVisitedRestaurants = function getVisitedRestaurants(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getVisitedRestaurantsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const getMileageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetMileage', inputVars);
}
getMileageRef.operationName = 'GetMileage';
exports.getMileageRef = getMileageRef;

exports.getMileage = function getMileage(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
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

const addVisitedRestaurantRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'AddVisitedRestaurant', inputVars);
}
addVisitedRestaurantRef.operationName = 'AddVisitedRestaurant';
exports.addVisitedRestaurantRef = addVisitedRestaurantRef;

exports.addVisitedRestaurant = function addVisitedRestaurant(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(addVisitedRestaurantRef(dcInstance, inputVars));
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

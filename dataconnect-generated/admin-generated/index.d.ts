import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AddRestaurantData {
  restaurant_insert: Restaurant_Key;
}

export interface AddRestaurantVariables {
  name: string;
  cuisine: string;
  milesRequired: number;
}

export interface AddRunData {
  run_insert: Run_Key;
}

export interface AddRunVariables {
  date: DateString;
  distanceMiles: number;
  durationMinutes: number;
}

export interface AddVisitedRestaurantData {
  visitedRestaurant_insert: VisitedRestaurant_Key;
}

export interface AddVisitedRestaurantVariables {
  name: string;
  cuisine: string;
}

export interface CreateMileageData {
  mileage_insert: Mileage_Key;
}

export interface CreateMileageVariables {
  netMiles: number;
}

export interface DeleteAllDataData {
  run_deleteMany: number;
  restaurant_deleteMany: number;
  mileage_deleteMany: number;
  visitedRestaurant_deleteMany: number;
}

export interface DeleteRestaurantData {
  restaurant_delete?: Restaurant_Key | null;
}

export interface DeleteRestaurantVariables {
  id: UUIDString;
}

export interface GetAllRestaurantsData {
  restaurants: ({
    id: UUIDString;
    name: string;
    cuisine: string;
    milesRequired: number;
  } & Restaurant_Key)[];
}

export interface GetAllRunsAndRestaurantsData {
  runs: ({
    id: UUIDString;
    date: DateString;
    distanceMiles: number;
    durationMinutes: number;
  } & Run_Key)[];
    restaurants: ({
      id: UUIDString;
      name: string;
      cuisine: string;
      milesRequired: number;
    } & Restaurant_Key)[];
}

export interface GetAllRunsAndRestaurantsVariables {
  userId: string;
}

export interface GetAllRunsData {
  runs: ({
    id: UUIDString;
    date: DateString;
    distanceMiles: number;
    durationMinutes: number;
  } & Run_Key)[];
}

export interface GetAllRunsVariables {
  userId: string;
}

export interface GetMileageData {
  mileage?: {
    netMiles: number;
  };
}

export interface GetMileageVariables {
  userId: string;
}

export interface GetVisitedRestaurantsData {
  visitedRestaurants: ({
    id: UUIDString;
    name: string;
    cuisine: string;
    visitedAt: DateString;
  } & VisitedRestaurant_Key)[];
}

export interface GetVisitedRestaurantsVariables {
  userId: string;
}

export interface Mileage_Key {
  userId: string;
  __typename?: 'Mileage_Key';
}

export interface Restaurant_Key {
  id: UUIDString;
  __typename?: 'Restaurant_Key';
}

export interface Run_Key {
  id: UUIDString;
  __typename?: 'Run_Key';
}

export interface UpdateMileageAfterRunData {
  mileage_update?: Mileage_Key | null;
}

export interface UpdateMileageAfterRunVariables {
  userId: string;
  netMiles: number;
}

export interface VisitedRestaurant_Key {
  id: UUIDString;
  __typename?: 'VisitedRestaurant_Key';
}

/** Generated Node Admin SDK operation action function for the 'GetAllRuns' Query. Allow users to execute without passing in DataConnect. */
export function getAllRuns(dc: DataConnect, vars: GetAllRunsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRunsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAllRuns' Query. Allow users to pass in custom DataConnect instances. */
export function getAllRuns(vars: GetAllRunsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRunsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAllRestaurants' Query. Allow users to execute without passing in DataConnect. */
export function getAllRestaurants(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRestaurantsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAllRestaurants' Query. Allow users to pass in custom DataConnect instances. */
export function getAllRestaurants(options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRestaurantsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAllRunsAndRestaurants' Query. Allow users to execute without passing in DataConnect. */
export function getAllRunsAndRestaurants(dc: DataConnect, vars: GetAllRunsAndRestaurantsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRunsAndRestaurantsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAllRunsAndRestaurants' Query. Allow users to pass in custom DataConnect instances. */
export function getAllRunsAndRestaurants(vars: GetAllRunsAndRestaurantsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAllRunsAndRestaurantsData>>;

/** Generated Node Admin SDK operation action function for the 'GetVisitedRestaurants' Query. Allow users to execute without passing in DataConnect. */
export function getVisitedRestaurants(dc: DataConnect, vars: GetVisitedRestaurantsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetVisitedRestaurantsData>>;
/** Generated Node Admin SDK operation action function for the 'GetVisitedRestaurants' Query. Allow users to pass in custom DataConnect instances. */
export function getVisitedRestaurants(vars: GetVisitedRestaurantsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetVisitedRestaurantsData>>;

/** Generated Node Admin SDK operation action function for the 'GetMileage' Query. Allow users to execute without passing in DataConnect. */
export function getMileage(dc: DataConnect, vars: GetMileageVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMileageData>>;
/** Generated Node Admin SDK operation action function for the 'GetMileage' Query. Allow users to pass in custom DataConnect instances. */
export function getMileage(vars: GetMileageVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMileageData>>;

/** Generated Node Admin SDK operation action function for the 'AddRun' Mutation. Allow users to execute without passing in DataConnect. */
export function addRun(dc: DataConnect, vars: AddRunVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddRunData>>;
/** Generated Node Admin SDK operation action function for the 'AddRun' Mutation. Allow users to pass in custom DataConnect instances. */
export function addRun(vars: AddRunVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddRunData>>;

/** Generated Node Admin SDK operation action function for the 'AddRestaurant' Mutation. Allow users to execute without passing in DataConnect. */
export function addRestaurant(dc: DataConnect, vars: AddRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddRestaurantData>>;
/** Generated Node Admin SDK operation action function for the 'AddRestaurant' Mutation. Allow users to pass in custom DataConnect instances. */
export function addRestaurant(vars: AddRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddRestaurantData>>;

/** Generated Node Admin SDK operation action function for the 'AddVisitedRestaurant' Mutation. Allow users to execute without passing in DataConnect. */
export function addVisitedRestaurant(dc: DataConnect, vars: AddVisitedRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddVisitedRestaurantData>>;
/** Generated Node Admin SDK operation action function for the 'AddVisitedRestaurant' Mutation. Allow users to pass in custom DataConnect instances. */
export function addVisitedRestaurant(vars: AddVisitedRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<AddVisitedRestaurantData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteRestaurant' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteRestaurant(dc: DataConnect, vars: DeleteRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteRestaurantData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteRestaurant' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteRestaurant(vars: DeleteRestaurantVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteRestaurantData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateMileageAfterRun' Mutation. Allow users to execute without passing in DataConnect. */
export function updateMileageAfterRun(dc: DataConnect, vars: UpdateMileageAfterRunVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateMileageAfterRunData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateMileageAfterRun' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateMileageAfterRun(vars: UpdateMileageAfterRunVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateMileageAfterRunData>>;

/** Generated Node Admin SDK operation action function for the 'CreateMileage' Mutation. Allow users to execute without passing in DataConnect. */
export function createMileage(dc: DataConnect, vars: CreateMileageVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateMileageData>>;
/** Generated Node Admin SDK operation action function for the 'CreateMileage' Mutation. Allow users to pass in custom DataConnect instances. */
export function createMileage(vars: CreateMileageVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateMileageData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteAllData' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteAllData(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAllDataData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteAllData' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteAllData(options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAllDataData>>;


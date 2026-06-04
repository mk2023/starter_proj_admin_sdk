import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

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

interface GetAllRunsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllRunsVariables): QueryRef<GetAllRunsData, GetAllRunsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAllRunsVariables): QueryRef<GetAllRunsData, GetAllRunsVariables>;
  operationName: string;
}
export const getAllRunsRef: GetAllRunsRef;

export function getAllRuns(vars: GetAllRunsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, GetAllRunsVariables>;
export function getAllRuns(dc: DataConnect, vars: GetAllRunsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, GetAllRunsVariables>;

interface GetAllRestaurantsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllRestaurantsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllRestaurantsData, undefined>;
  operationName: string;
}
export const getAllRestaurantsRef: GetAllRestaurantsRef;

export function getAllRestaurants(options?: ExecuteQueryOptions): QueryPromise<GetAllRestaurantsData, undefined>;
export function getAllRestaurants(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllRestaurantsData, undefined>;

interface GetAllRunsAndRestaurantsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllRunsAndRestaurantsVariables): QueryRef<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAllRunsAndRestaurantsVariables): QueryRef<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;
  operationName: string;
}
export const getAllRunsAndRestaurantsRef: GetAllRunsAndRestaurantsRef;

export function getAllRunsAndRestaurants(vars: GetAllRunsAndRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;
export function getAllRunsAndRestaurants(dc: DataConnect, vars: GetAllRunsAndRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;

interface GetVisitedRestaurantsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetVisitedRestaurantsVariables): QueryRef<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetVisitedRestaurantsVariables): QueryRef<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;
  operationName: string;
}
export const getVisitedRestaurantsRef: GetVisitedRestaurantsRef;

export function getVisitedRestaurants(vars: GetVisitedRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;
export function getVisitedRestaurants(dc: DataConnect, vars: GetVisitedRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;

interface GetMileageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMileageVariables): QueryRef<GetMileageData, GetMileageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetMileageVariables): QueryRef<GetMileageData, GetMileageVariables>;
  operationName: string;
}
export const getMileageRef: GetMileageRef;

export function getMileage(vars: GetMileageVariables, options?: ExecuteQueryOptions): QueryPromise<GetMileageData, GetMileageVariables>;
export function getMileage(dc: DataConnect, vars: GetMileageVariables, options?: ExecuteQueryOptions): QueryPromise<GetMileageData, GetMileageVariables>;

interface AddRunRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRunVariables): MutationRef<AddRunData, AddRunVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddRunVariables): MutationRef<AddRunData, AddRunVariables>;
  operationName: string;
}
export const addRunRef: AddRunRef;

export function addRun(vars: AddRunVariables): MutationPromise<AddRunData, AddRunVariables>;
export function addRun(dc: DataConnect, vars: AddRunVariables): MutationPromise<AddRunData, AddRunVariables>;

interface AddRestaurantRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRestaurantVariables): MutationRef<AddRestaurantData, AddRestaurantVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddRestaurantVariables): MutationRef<AddRestaurantData, AddRestaurantVariables>;
  operationName: string;
}
export const addRestaurantRef: AddRestaurantRef;

export function addRestaurant(vars: AddRestaurantVariables): MutationPromise<AddRestaurantData, AddRestaurantVariables>;
export function addRestaurant(dc: DataConnect, vars: AddRestaurantVariables): MutationPromise<AddRestaurantData, AddRestaurantVariables>;

interface AddVisitedRestaurantRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddVisitedRestaurantVariables): MutationRef<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: AddVisitedRestaurantVariables): MutationRef<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;
  operationName: string;
}
export const addVisitedRestaurantRef: AddVisitedRestaurantRef;

export function addVisitedRestaurant(vars: AddVisitedRestaurantVariables): MutationPromise<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;
export function addVisitedRestaurant(dc: DataConnect, vars: AddVisitedRestaurantVariables): MutationPromise<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;

interface DeleteRestaurantRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRestaurantVariables): MutationRef<DeleteRestaurantData, DeleteRestaurantVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteRestaurantVariables): MutationRef<DeleteRestaurantData, DeleteRestaurantVariables>;
  operationName: string;
}
export const deleteRestaurantRef: DeleteRestaurantRef;

export function deleteRestaurant(vars: DeleteRestaurantVariables): MutationPromise<DeleteRestaurantData, DeleteRestaurantVariables>;
export function deleteRestaurant(dc: DataConnect, vars: DeleteRestaurantVariables): MutationPromise<DeleteRestaurantData, DeleteRestaurantVariables>;

interface UpdateMileageAfterRunRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMileageAfterRunVariables): MutationRef<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateMileageAfterRunVariables): MutationRef<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;
  operationName: string;
}
export const updateMileageAfterRunRef: UpdateMileageAfterRunRef;

export function updateMileageAfterRun(vars: UpdateMileageAfterRunVariables): MutationPromise<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;
export function updateMileageAfterRun(dc: DataConnect, vars: UpdateMileageAfterRunVariables): MutationPromise<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;

interface CreateMileageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMileageVariables): MutationRef<CreateMileageData, CreateMileageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMileageVariables): MutationRef<CreateMileageData, CreateMileageVariables>;
  operationName: string;
}
export const createMileageRef: CreateMileageRef;

export function createMileage(vars: CreateMileageVariables): MutationPromise<CreateMileageData, CreateMileageVariables>;
export function createMileage(dc: DataConnect, vars: CreateMileageVariables): MutationPromise<CreateMileageData, CreateMileageVariables>;

interface DeleteAllDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteAllDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteAllDataData, undefined>;
  operationName: string;
}
export const deleteAllDataRef: DeleteAllDataRef;

export function deleteAllData(): MutationPromise<DeleteAllDataData, undefined>;
export function deleteAllData(dc: DataConnect): MutationPromise<DeleteAllDataData, undefined>;


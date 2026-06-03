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
    isVisited: boolean;
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
      isVisited: boolean;
    } & Restaurant_Key)[];
}

export interface GetAllRunsData {
  runs: ({
    id: UUIDString;
    date: DateString;
    distanceMiles: number;
    durationMinutes: number;
  } & Run_Key)[];
}

export interface GetMileageData {
  mileages: ({
    id: UUIDString;
    netMiles: number;
  } & Mileage_Key)[];
}

export interface MarkRestaurantVisitedData {
  restaurant_update?: Restaurant_Key | null;
}

export interface MarkRestaurantVisitedVariables {
  id: UUIDString;
}

export interface Mileage_Key {
  id: UUIDString;
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

export interface UnmarkRestaurantVisitedData {
  restaurant_update?: Restaurant_Key | null;
}

export interface UnmarkRestaurantVisitedVariables {
  id: UUIDString;
}

export interface UpdateMileageAfterRunData {
  mileage_update?: Mileage_Key | null;
}

export interface UpdateMileageAfterRunVariables {
  id: UUIDString;
  netMiles: number;
}

interface GetAllRunsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllRunsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllRunsData, undefined>;
  operationName: string;
}
export const getAllRunsRef: GetAllRunsRef;

export function getAllRuns(options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, undefined>;
export function getAllRuns(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, undefined>;

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
  (): QueryRef<GetAllRunsAndRestaurantsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAllRunsAndRestaurantsData, undefined>;
  operationName: string;
}
export const getAllRunsAndRestaurantsRef: GetAllRunsAndRestaurantsRef;

export function getAllRunsAndRestaurants(options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, undefined>;
export function getAllRunsAndRestaurants(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, undefined>;

interface GetMileageRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMileageData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMileageData, undefined>;
  operationName: string;
}
export const getMileageRef: GetMileageRef;

export function getMileage(options?: ExecuteQueryOptions): QueryPromise<GetMileageData, undefined>;
export function getMileage(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMileageData, undefined>;

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

interface MarkRestaurantVisitedRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: MarkRestaurantVisitedVariables): MutationRef<MarkRestaurantVisitedData, MarkRestaurantVisitedVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: MarkRestaurantVisitedVariables): MutationRef<MarkRestaurantVisitedData, MarkRestaurantVisitedVariables>;
  operationName: string;
}
export const markRestaurantVisitedRef: MarkRestaurantVisitedRef;

export function markRestaurantVisited(vars: MarkRestaurantVisitedVariables): MutationPromise<MarkRestaurantVisitedData, MarkRestaurantVisitedVariables>;
export function markRestaurantVisited(dc: DataConnect, vars: MarkRestaurantVisitedVariables): MutationPromise<MarkRestaurantVisitedData, MarkRestaurantVisitedVariables>;

interface UnmarkRestaurantVisitedRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UnmarkRestaurantVisitedVariables): MutationRef<UnmarkRestaurantVisitedData, UnmarkRestaurantVisitedVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UnmarkRestaurantVisitedVariables): MutationRef<UnmarkRestaurantVisitedData, UnmarkRestaurantVisitedVariables>;
  operationName: string;
}
export const unmarkRestaurantVisitedRef: UnmarkRestaurantVisitedRef;

export function unmarkRestaurantVisited(vars: UnmarkRestaurantVisitedVariables): MutationPromise<UnmarkRestaurantVisitedData, UnmarkRestaurantVisitedVariables>;
export function unmarkRestaurantVisited(dc: DataConnect, vars: UnmarkRestaurantVisitedVariables): MutationPromise<UnmarkRestaurantVisitedData, UnmarkRestaurantVisitedVariables>;

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


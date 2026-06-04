# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `default-connector`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetAllRuns*](#getallruns)
  - [*GetAllRestaurants*](#getallrestaurants)
  - [*GetAllRunsAndRestaurants*](#getallrunsandrestaurants)
  - [*GetVisitedRestaurants*](#getvisitedrestaurants)
  - [*GetMileage*](#getmileage)
- [**Mutations**](#mutations)
  - [*AddRun*](#addrun)
  - [*AddRestaurant*](#addrestaurant)
  - [*AddVisitedRestaurant*](#addvisitedrestaurant)
  - [*deleteRestaurant*](#deleterestaurant)
  - [*UpdateMileageAfterRun*](#updatemileageafterrun)
  - [*CreateMileage*](#createmileage)
  - [*DeleteAllData*](#deletealldata)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `default-connector`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default-connector` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetAllRuns
You can execute the `GetAllRuns` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllRuns(vars: GetAllRunsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, GetAllRunsVariables>;

interface GetAllRunsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllRunsVariables): QueryRef<GetAllRunsData, GetAllRunsVariables>;
}
export const getAllRunsRef: GetAllRunsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllRuns(dc: DataConnect, vars: GetAllRunsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsData, GetAllRunsVariables>;

interface GetAllRunsRef {
  ...
  (dc: DataConnect, vars: GetAllRunsVariables): QueryRef<GetAllRunsData, GetAllRunsVariables>;
}
export const getAllRunsRef: GetAllRunsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllRunsRef:
```typescript
const name = getAllRunsRef.operationName;
console.log(name);
```

### Variables
The `GetAllRuns` query requires an argument of type `GetAllRunsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAllRunsVariables {
  userId: string;
}
```
### Return Type
Recall that executing the `GetAllRuns` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllRunsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllRunsData {
  runs: ({
    id: UUIDString;
    date: DateString;
    distanceMiles: number;
    durationMinutes: number;
  } & Run_Key)[];
}
```
### Using `GetAllRuns`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllRuns, GetAllRunsVariables } from '@dataconnect/generated';

// The `GetAllRuns` query requires an argument of type `GetAllRunsVariables`:
const getAllRunsVars: GetAllRunsVariables = {
  userId: ..., 
};

// Call the `getAllRuns()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllRuns(getAllRunsVars);
// Variables can be defined inline as well.
const { data } = await getAllRuns({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllRuns(dataConnect, getAllRunsVars);

console.log(data.runs);

// Or, you can use the `Promise` API.
getAllRuns(getAllRunsVars).then((response) => {
  const data = response.data;
  console.log(data.runs);
});
```

### Using `GetAllRuns`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllRunsRef, GetAllRunsVariables } from '@dataconnect/generated';

// The `GetAllRuns` query requires an argument of type `GetAllRunsVariables`:
const getAllRunsVars: GetAllRunsVariables = {
  userId: ..., 
};

// Call the `getAllRunsRef()` function to get a reference to the query.
const ref = getAllRunsRef(getAllRunsVars);
// Variables can be defined inline as well.
const ref = getAllRunsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllRunsRef(dataConnect, getAllRunsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.runs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.runs);
});
```

## GetAllRestaurants
You can execute the `GetAllRestaurants` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllRestaurants(options?: ExecuteQueryOptions): QueryPromise<GetAllRestaurantsData, undefined>;

interface GetAllRestaurantsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAllRestaurantsData, undefined>;
}
export const getAllRestaurantsRef: GetAllRestaurantsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllRestaurants(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAllRestaurantsData, undefined>;

interface GetAllRestaurantsRef {
  ...
  (dc: DataConnect): QueryRef<GetAllRestaurantsData, undefined>;
}
export const getAllRestaurantsRef: GetAllRestaurantsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllRestaurantsRef:
```typescript
const name = getAllRestaurantsRef.operationName;
console.log(name);
```

### Variables
The `GetAllRestaurants` query has no variables.
### Return Type
Recall that executing the `GetAllRestaurants` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllRestaurantsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetAllRestaurantsData {
  restaurants: ({
    id: UUIDString;
    name: string;
    cuisine: string;
    milesRequired: number;
  } & Restaurant_Key)[];
}
```
### Using `GetAllRestaurants`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllRestaurants } from '@dataconnect/generated';


// Call the `getAllRestaurants()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllRestaurants();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllRestaurants(dataConnect);

console.log(data.restaurants);

// Or, you can use the `Promise` API.
getAllRestaurants().then((response) => {
  const data = response.data;
  console.log(data.restaurants);
});
```

### Using `GetAllRestaurants`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllRestaurantsRef } from '@dataconnect/generated';


// Call the `getAllRestaurantsRef()` function to get a reference to the query.
const ref = getAllRestaurantsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllRestaurantsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.restaurants);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.restaurants);
});
```

## GetAllRunsAndRestaurants
You can execute the `GetAllRunsAndRestaurants` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getAllRunsAndRestaurants(vars: GetAllRunsAndRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;

interface GetAllRunsAndRestaurantsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAllRunsAndRestaurantsVariables): QueryRef<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;
}
export const getAllRunsAndRestaurantsRef: GetAllRunsAndRestaurantsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getAllRunsAndRestaurants(dc: DataConnect, vars: GetAllRunsAndRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;

interface GetAllRunsAndRestaurantsRef {
  ...
  (dc: DataConnect, vars: GetAllRunsAndRestaurantsVariables): QueryRef<GetAllRunsAndRestaurantsData, GetAllRunsAndRestaurantsVariables>;
}
export const getAllRunsAndRestaurantsRef: GetAllRunsAndRestaurantsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getAllRunsAndRestaurantsRef:
```typescript
const name = getAllRunsAndRestaurantsRef.operationName;
console.log(name);
```

### Variables
The `GetAllRunsAndRestaurants` query requires an argument of type `GetAllRunsAndRestaurantsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetAllRunsAndRestaurantsVariables {
  userId: string;
}
```
### Return Type
Recall that executing the `GetAllRunsAndRestaurants` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetAllRunsAndRestaurantsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetAllRunsAndRestaurants`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getAllRunsAndRestaurants, GetAllRunsAndRestaurantsVariables } from '@dataconnect/generated';

// The `GetAllRunsAndRestaurants` query requires an argument of type `GetAllRunsAndRestaurantsVariables`:
const getAllRunsAndRestaurantsVars: GetAllRunsAndRestaurantsVariables = {
  userId: ..., 
};

// Call the `getAllRunsAndRestaurants()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getAllRunsAndRestaurants(getAllRunsAndRestaurantsVars);
// Variables can be defined inline as well.
const { data } = await getAllRunsAndRestaurants({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getAllRunsAndRestaurants(dataConnect, getAllRunsAndRestaurantsVars);

console.log(data.runs);
console.log(data.restaurants);

// Or, you can use the `Promise` API.
getAllRunsAndRestaurants(getAllRunsAndRestaurantsVars).then((response) => {
  const data = response.data;
  console.log(data.runs);
  console.log(data.restaurants);
});
```

### Using `GetAllRunsAndRestaurants`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getAllRunsAndRestaurantsRef, GetAllRunsAndRestaurantsVariables } from '@dataconnect/generated';

// The `GetAllRunsAndRestaurants` query requires an argument of type `GetAllRunsAndRestaurantsVariables`:
const getAllRunsAndRestaurantsVars: GetAllRunsAndRestaurantsVariables = {
  userId: ..., 
};

// Call the `getAllRunsAndRestaurantsRef()` function to get a reference to the query.
const ref = getAllRunsAndRestaurantsRef(getAllRunsAndRestaurantsVars);
// Variables can be defined inline as well.
const ref = getAllRunsAndRestaurantsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getAllRunsAndRestaurantsRef(dataConnect, getAllRunsAndRestaurantsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.runs);
console.log(data.restaurants);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.runs);
  console.log(data.restaurants);
});
```

## GetVisitedRestaurants
You can execute the `GetVisitedRestaurants` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getVisitedRestaurants(vars: GetVisitedRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;

interface GetVisitedRestaurantsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetVisitedRestaurantsVariables): QueryRef<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;
}
export const getVisitedRestaurantsRef: GetVisitedRestaurantsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getVisitedRestaurants(dc: DataConnect, vars: GetVisitedRestaurantsVariables, options?: ExecuteQueryOptions): QueryPromise<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;

interface GetVisitedRestaurantsRef {
  ...
  (dc: DataConnect, vars: GetVisitedRestaurantsVariables): QueryRef<GetVisitedRestaurantsData, GetVisitedRestaurantsVariables>;
}
export const getVisitedRestaurantsRef: GetVisitedRestaurantsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getVisitedRestaurantsRef:
```typescript
const name = getVisitedRestaurantsRef.operationName;
console.log(name);
```

### Variables
The `GetVisitedRestaurants` query requires an argument of type `GetVisitedRestaurantsVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetVisitedRestaurantsVariables {
  userId: string;
}
```
### Return Type
Recall that executing the `GetVisitedRestaurants` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetVisitedRestaurantsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetVisitedRestaurantsData {
  visitedRestaurants: ({
    id: UUIDString;
    name: string;
    cuisine: string;
    visitedAt: DateString;
  } & VisitedRestaurant_Key)[];
}
```
### Using `GetVisitedRestaurants`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getVisitedRestaurants, GetVisitedRestaurantsVariables } from '@dataconnect/generated';

// The `GetVisitedRestaurants` query requires an argument of type `GetVisitedRestaurantsVariables`:
const getVisitedRestaurantsVars: GetVisitedRestaurantsVariables = {
  userId: ..., 
};

// Call the `getVisitedRestaurants()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getVisitedRestaurants(getVisitedRestaurantsVars);
// Variables can be defined inline as well.
const { data } = await getVisitedRestaurants({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getVisitedRestaurants(dataConnect, getVisitedRestaurantsVars);

console.log(data.visitedRestaurants);

// Or, you can use the `Promise` API.
getVisitedRestaurants(getVisitedRestaurantsVars).then((response) => {
  const data = response.data;
  console.log(data.visitedRestaurants);
});
```

### Using `GetVisitedRestaurants`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getVisitedRestaurantsRef, GetVisitedRestaurantsVariables } from '@dataconnect/generated';

// The `GetVisitedRestaurants` query requires an argument of type `GetVisitedRestaurantsVariables`:
const getVisitedRestaurantsVars: GetVisitedRestaurantsVariables = {
  userId: ..., 
};

// Call the `getVisitedRestaurantsRef()` function to get a reference to the query.
const ref = getVisitedRestaurantsRef(getVisitedRestaurantsVars);
// Variables can be defined inline as well.
const ref = getVisitedRestaurantsRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getVisitedRestaurantsRef(dataConnect, getVisitedRestaurantsVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.visitedRestaurants);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.visitedRestaurants);
});
```

## GetMileage
You can execute the `GetMileage` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getMileage(vars: GetMileageVariables, options?: ExecuteQueryOptions): QueryPromise<GetMileageData, GetMileageVariables>;

interface GetMileageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetMileageVariables): QueryRef<GetMileageData, GetMileageVariables>;
}
export const getMileageRef: GetMileageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getMileage(dc: DataConnect, vars: GetMileageVariables, options?: ExecuteQueryOptions): QueryPromise<GetMileageData, GetMileageVariables>;

interface GetMileageRef {
  ...
  (dc: DataConnect, vars: GetMileageVariables): QueryRef<GetMileageData, GetMileageVariables>;
}
export const getMileageRef: GetMileageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getMileageRef:
```typescript
const name = getMileageRef.operationName;
console.log(name);
```

### Variables
The `GetMileage` query requires an argument of type `GetMileageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetMileageVariables {
  userId: string;
}
```
### Return Type
Recall that executing the `GetMileage` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetMileageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetMileageData {
  mileage?: {
    netMiles: number;
  };
}
```
### Using `GetMileage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getMileage, GetMileageVariables } from '@dataconnect/generated';

// The `GetMileage` query requires an argument of type `GetMileageVariables`:
const getMileageVars: GetMileageVariables = {
  userId: ..., 
};

// Call the `getMileage()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getMileage(getMileageVars);
// Variables can be defined inline as well.
const { data } = await getMileage({ userId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getMileage(dataConnect, getMileageVars);

console.log(data.mileage);

// Or, you can use the `Promise` API.
getMileage(getMileageVars).then((response) => {
  const data = response.data;
  console.log(data.mileage);
});
```

### Using `GetMileage`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getMileageRef, GetMileageVariables } from '@dataconnect/generated';

// The `GetMileage` query requires an argument of type `GetMileageVariables`:
const getMileageVars: GetMileageVariables = {
  userId: ..., 
};

// Call the `getMileageRef()` function to get a reference to the query.
const ref = getMileageRef(getMileageVars);
// Variables can be defined inline as well.
const ref = getMileageRef({ userId: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getMileageRef(dataConnect, getMileageVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.mileage);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.mileage);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `default-connector` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## AddRun
You can execute the `AddRun` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addRun(vars: AddRunVariables): MutationPromise<AddRunData, AddRunVariables>;

interface AddRunRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRunVariables): MutationRef<AddRunData, AddRunVariables>;
}
export const addRunRef: AddRunRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addRun(dc: DataConnect, vars: AddRunVariables): MutationPromise<AddRunData, AddRunVariables>;

interface AddRunRef {
  ...
  (dc: DataConnect, vars: AddRunVariables): MutationRef<AddRunData, AddRunVariables>;
}
export const addRunRef: AddRunRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addRunRef:
```typescript
const name = addRunRef.operationName;
console.log(name);
```

### Variables
The `AddRun` mutation requires an argument of type `AddRunVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddRunVariables {
  date: DateString;
  distanceMiles: number;
  durationMinutes: number;
}
```
### Return Type
Recall that executing the `AddRun` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddRunData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddRunData {
  run_insert: Run_Key;
}
```
### Using `AddRun`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addRun, AddRunVariables } from '@dataconnect/generated';

// The `AddRun` mutation requires an argument of type `AddRunVariables`:
const addRunVars: AddRunVariables = {
  date: ..., 
  distanceMiles: ..., 
  durationMinutes: ..., 
};

// Call the `addRun()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addRun(addRunVars);
// Variables can be defined inline as well.
const { data } = await addRun({ date: ..., distanceMiles: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addRun(dataConnect, addRunVars);

console.log(data.run_insert);

// Or, you can use the `Promise` API.
addRun(addRunVars).then((response) => {
  const data = response.data;
  console.log(data.run_insert);
});
```

### Using `AddRun`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addRunRef, AddRunVariables } from '@dataconnect/generated';

// The `AddRun` mutation requires an argument of type `AddRunVariables`:
const addRunVars: AddRunVariables = {
  date: ..., 
  distanceMiles: ..., 
  durationMinutes: ..., 
};

// Call the `addRunRef()` function to get a reference to the mutation.
const ref = addRunRef(addRunVars);
// Variables can be defined inline as well.
const ref = addRunRef({ date: ..., distanceMiles: ..., durationMinutes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addRunRef(dataConnect, addRunVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.run_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.run_insert);
});
```

## AddRestaurant
You can execute the `AddRestaurant` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addRestaurant(vars: AddRestaurantVariables): MutationPromise<AddRestaurantData, AddRestaurantVariables>;

interface AddRestaurantRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddRestaurantVariables): MutationRef<AddRestaurantData, AddRestaurantVariables>;
}
export const addRestaurantRef: AddRestaurantRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addRestaurant(dc: DataConnect, vars: AddRestaurantVariables): MutationPromise<AddRestaurantData, AddRestaurantVariables>;

interface AddRestaurantRef {
  ...
  (dc: DataConnect, vars: AddRestaurantVariables): MutationRef<AddRestaurantData, AddRestaurantVariables>;
}
export const addRestaurantRef: AddRestaurantRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addRestaurantRef:
```typescript
const name = addRestaurantRef.operationName;
console.log(name);
```

### Variables
The `AddRestaurant` mutation requires an argument of type `AddRestaurantVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddRestaurantVariables {
  name: string;
  cuisine: string;
  milesRequired: number;
}
```
### Return Type
Recall that executing the `AddRestaurant` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddRestaurantData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddRestaurantData {
  restaurant_insert: Restaurant_Key;
}
```
### Using `AddRestaurant`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addRestaurant, AddRestaurantVariables } from '@dataconnect/generated';

// The `AddRestaurant` mutation requires an argument of type `AddRestaurantVariables`:
const addRestaurantVars: AddRestaurantVariables = {
  name: ..., 
  cuisine: ..., 
  milesRequired: ..., 
};

// Call the `addRestaurant()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addRestaurant(addRestaurantVars);
// Variables can be defined inline as well.
const { data } = await addRestaurant({ name: ..., cuisine: ..., milesRequired: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addRestaurant(dataConnect, addRestaurantVars);

console.log(data.restaurant_insert);

// Or, you can use the `Promise` API.
addRestaurant(addRestaurantVars).then((response) => {
  const data = response.data;
  console.log(data.restaurant_insert);
});
```

### Using `AddRestaurant`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addRestaurantRef, AddRestaurantVariables } from '@dataconnect/generated';

// The `AddRestaurant` mutation requires an argument of type `AddRestaurantVariables`:
const addRestaurantVars: AddRestaurantVariables = {
  name: ..., 
  cuisine: ..., 
  milesRequired: ..., 
};

// Call the `addRestaurantRef()` function to get a reference to the mutation.
const ref = addRestaurantRef(addRestaurantVars);
// Variables can be defined inline as well.
const ref = addRestaurantRef({ name: ..., cuisine: ..., milesRequired: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addRestaurantRef(dataConnect, addRestaurantVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.restaurant_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.restaurant_insert);
});
```

## AddVisitedRestaurant
You can execute the `AddVisitedRestaurant` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
addVisitedRestaurant(vars: AddVisitedRestaurantVariables): MutationPromise<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;

interface AddVisitedRestaurantRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: AddVisitedRestaurantVariables): MutationRef<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;
}
export const addVisitedRestaurantRef: AddVisitedRestaurantRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
addVisitedRestaurant(dc: DataConnect, vars: AddVisitedRestaurantVariables): MutationPromise<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;

interface AddVisitedRestaurantRef {
  ...
  (dc: DataConnect, vars: AddVisitedRestaurantVariables): MutationRef<AddVisitedRestaurantData, AddVisitedRestaurantVariables>;
}
export const addVisitedRestaurantRef: AddVisitedRestaurantRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the addVisitedRestaurantRef:
```typescript
const name = addVisitedRestaurantRef.operationName;
console.log(name);
```

### Variables
The `AddVisitedRestaurant` mutation requires an argument of type `AddVisitedRestaurantVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface AddVisitedRestaurantVariables {
  name: string;
  cuisine: string;
}
```
### Return Type
Recall that executing the `AddVisitedRestaurant` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AddVisitedRestaurantData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AddVisitedRestaurantData {
  visitedRestaurant_insert: VisitedRestaurant_Key;
}
```
### Using `AddVisitedRestaurant`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, addVisitedRestaurant, AddVisitedRestaurantVariables } from '@dataconnect/generated';

// The `AddVisitedRestaurant` mutation requires an argument of type `AddVisitedRestaurantVariables`:
const addVisitedRestaurantVars: AddVisitedRestaurantVariables = {
  name: ..., 
  cuisine: ..., 
};

// Call the `addVisitedRestaurant()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await addVisitedRestaurant(addVisitedRestaurantVars);
// Variables can be defined inline as well.
const { data } = await addVisitedRestaurant({ name: ..., cuisine: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await addVisitedRestaurant(dataConnect, addVisitedRestaurantVars);

console.log(data.visitedRestaurant_insert);

// Or, you can use the `Promise` API.
addVisitedRestaurant(addVisitedRestaurantVars).then((response) => {
  const data = response.data;
  console.log(data.visitedRestaurant_insert);
});
```

### Using `AddVisitedRestaurant`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, addVisitedRestaurantRef, AddVisitedRestaurantVariables } from '@dataconnect/generated';

// The `AddVisitedRestaurant` mutation requires an argument of type `AddVisitedRestaurantVariables`:
const addVisitedRestaurantVars: AddVisitedRestaurantVariables = {
  name: ..., 
  cuisine: ..., 
};

// Call the `addVisitedRestaurantRef()` function to get a reference to the mutation.
const ref = addVisitedRestaurantRef(addVisitedRestaurantVars);
// Variables can be defined inline as well.
const ref = addVisitedRestaurantRef({ name: ..., cuisine: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = addVisitedRestaurantRef(dataConnect, addVisitedRestaurantVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.visitedRestaurant_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.visitedRestaurant_insert);
});
```

## deleteRestaurant
You can execute the `deleteRestaurant` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteRestaurant(vars: DeleteRestaurantVariables): MutationPromise<DeleteRestaurantData, DeleteRestaurantVariables>;

interface DeleteRestaurantRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteRestaurantVariables): MutationRef<DeleteRestaurantData, DeleteRestaurantVariables>;
}
export const deleteRestaurantRef: DeleteRestaurantRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteRestaurant(dc: DataConnect, vars: DeleteRestaurantVariables): MutationPromise<DeleteRestaurantData, DeleteRestaurantVariables>;

interface DeleteRestaurantRef {
  ...
  (dc: DataConnect, vars: DeleteRestaurantVariables): MutationRef<DeleteRestaurantData, DeleteRestaurantVariables>;
}
export const deleteRestaurantRef: DeleteRestaurantRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteRestaurantRef:
```typescript
const name = deleteRestaurantRef.operationName;
console.log(name);
```

### Variables
The `deleteRestaurant` mutation requires an argument of type `DeleteRestaurantVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteRestaurantVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `deleteRestaurant` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteRestaurantData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteRestaurantData {
  restaurant_delete?: Restaurant_Key | null;
}
```
### Using `deleteRestaurant`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteRestaurant, DeleteRestaurantVariables } from '@dataconnect/generated';

// The `deleteRestaurant` mutation requires an argument of type `DeleteRestaurantVariables`:
const deleteRestaurantVars: DeleteRestaurantVariables = {
  id: ..., 
};

// Call the `deleteRestaurant()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteRestaurant(deleteRestaurantVars);
// Variables can be defined inline as well.
const { data } = await deleteRestaurant({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteRestaurant(dataConnect, deleteRestaurantVars);

console.log(data.restaurant_delete);

// Or, you can use the `Promise` API.
deleteRestaurant(deleteRestaurantVars).then((response) => {
  const data = response.data;
  console.log(data.restaurant_delete);
});
```

### Using `deleteRestaurant`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteRestaurantRef, DeleteRestaurantVariables } from '@dataconnect/generated';

// The `deleteRestaurant` mutation requires an argument of type `DeleteRestaurantVariables`:
const deleteRestaurantVars: DeleteRestaurantVariables = {
  id: ..., 
};

// Call the `deleteRestaurantRef()` function to get a reference to the mutation.
const ref = deleteRestaurantRef(deleteRestaurantVars);
// Variables can be defined inline as well.
const ref = deleteRestaurantRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteRestaurantRef(dataConnect, deleteRestaurantVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.restaurant_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.restaurant_delete);
});
```

## UpdateMileageAfterRun
You can execute the `UpdateMileageAfterRun` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateMileageAfterRun(vars: UpdateMileageAfterRunVariables): MutationPromise<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;

interface UpdateMileageAfterRunRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateMileageAfterRunVariables): MutationRef<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;
}
export const updateMileageAfterRunRef: UpdateMileageAfterRunRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateMileageAfterRun(dc: DataConnect, vars: UpdateMileageAfterRunVariables): MutationPromise<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;

interface UpdateMileageAfterRunRef {
  ...
  (dc: DataConnect, vars: UpdateMileageAfterRunVariables): MutationRef<UpdateMileageAfterRunData, UpdateMileageAfterRunVariables>;
}
export const updateMileageAfterRunRef: UpdateMileageAfterRunRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateMileageAfterRunRef:
```typescript
const name = updateMileageAfterRunRef.operationName;
console.log(name);
```

### Variables
The `UpdateMileageAfterRun` mutation requires an argument of type `UpdateMileageAfterRunVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateMileageAfterRunVariables {
  userId: string;
  netMiles: number;
}
```
### Return Type
Recall that executing the `UpdateMileageAfterRun` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateMileageAfterRunData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateMileageAfterRunData {
  mileage_update?: Mileage_Key | null;
}
```
### Using `UpdateMileageAfterRun`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateMileageAfterRun, UpdateMileageAfterRunVariables } from '@dataconnect/generated';

// The `UpdateMileageAfterRun` mutation requires an argument of type `UpdateMileageAfterRunVariables`:
const updateMileageAfterRunVars: UpdateMileageAfterRunVariables = {
  userId: ..., 
  netMiles: ..., 
};

// Call the `updateMileageAfterRun()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateMileageAfterRun(updateMileageAfterRunVars);
// Variables can be defined inline as well.
const { data } = await updateMileageAfterRun({ userId: ..., netMiles: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateMileageAfterRun(dataConnect, updateMileageAfterRunVars);

console.log(data.mileage_update);

// Or, you can use the `Promise` API.
updateMileageAfterRun(updateMileageAfterRunVars).then((response) => {
  const data = response.data;
  console.log(data.mileage_update);
});
```

### Using `UpdateMileageAfterRun`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateMileageAfterRunRef, UpdateMileageAfterRunVariables } from '@dataconnect/generated';

// The `UpdateMileageAfterRun` mutation requires an argument of type `UpdateMileageAfterRunVariables`:
const updateMileageAfterRunVars: UpdateMileageAfterRunVariables = {
  userId: ..., 
  netMiles: ..., 
};

// Call the `updateMileageAfterRunRef()` function to get a reference to the mutation.
const ref = updateMileageAfterRunRef(updateMileageAfterRunVars);
// Variables can be defined inline as well.
const ref = updateMileageAfterRunRef({ userId: ..., netMiles: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateMileageAfterRunRef(dataConnect, updateMileageAfterRunVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mileage_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mileage_update);
});
```

## CreateMileage
You can execute the `CreateMileage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMileage(vars: CreateMileageVariables): MutationPromise<CreateMileageData, CreateMileageVariables>;

interface CreateMileageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMileageVariables): MutationRef<CreateMileageData, CreateMileageVariables>;
}
export const createMileageRef: CreateMileageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMileage(dc: DataConnect, vars: CreateMileageVariables): MutationPromise<CreateMileageData, CreateMileageVariables>;

interface CreateMileageRef {
  ...
  (dc: DataConnect, vars: CreateMileageVariables): MutationRef<CreateMileageData, CreateMileageVariables>;
}
export const createMileageRef: CreateMileageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMileageRef:
```typescript
const name = createMileageRef.operationName;
console.log(name);
```

### Variables
The `CreateMileage` mutation requires an argument of type `CreateMileageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMileageVariables {
  netMiles: number;
}
```
### Return Type
Recall that executing the `CreateMileage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMileageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMileageData {
  mileage_insert: Mileage_Key;
}
```
### Using `CreateMileage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMileage, CreateMileageVariables } from '@dataconnect/generated';

// The `CreateMileage` mutation requires an argument of type `CreateMileageVariables`:
const createMileageVars: CreateMileageVariables = {
  netMiles: ..., 
};

// Call the `createMileage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMileage(createMileageVars);
// Variables can be defined inline as well.
const { data } = await createMileage({ netMiles: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMileage(dataConnect, createMileageVars);

console.log(data.mileage_insert);

// Or, you can use the `Promise` API.
createMileage(createMileageVars).then((response) => {
  const data = response.data;
  console.log(data.mileage_insert);
});
```

### Using `CreateMileage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMileageRef, CreateMileageVariables } from '@dataconnect/generated';

// The `CreateMileage` mutation requires an argument of type `CreateMileageVariables`:
const createMileageVars: CreateMileageVariables = {
  netMiles: ..., 
};

// Call the `createMileageRef()` function to get a reference to the mutation.
const ref = createMileageRef(createMileageVars);
// Variables can be defined inline as well.
const ref = createMileageRef({ netMiles: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMileageRef(dataConnect, createMileageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.mileage_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.mileage_insert);
});
```

## DeleteAllData
You can execute the `DeleteAllData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteAllData(): MutationPromise<DeleteAllDataData, undefined>;

interface DeleteAllDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteAllDataData, undefined>;
}
export const deleteAllDataRef: DeleteAllDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteAllData(dc: DataConnect): MutationPromise<DeleteAllDataData, undefined>;

interface DeleteAllDataRef {
  ...
  (dc: DataConnect): MutationRef<DeleteAllDataData, undefined>;
}
export const deleteAllDataRef: DeleteAllDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteAllDataRef:
```typescript
const name = deleteAllDataRef.operationName;
console.log(name);
```

### Variables
The `DeleteAllData` mutation has no variables.
### Return Type
Recall that executing the `DeleteAllData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteAllDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteAllDataData {
  run_deleteMany: number;
  restaurant_deleteMany: number;
  mileage_deleteMany: number;
  visitedRestaurant_deleteMany: number;
}
```
### Using `DeleteAllData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteAllData } from '@dataconnect/generated';


// Call the `deleteAllData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteAllData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteAllData(dataConnect);

console.log(data.run_deleteMany);
console.log(data.restaurant_deleteMany);
console.log(data.mileage_deleteMany);
console.log(data.visitedRestaurant_deleteMany);

// Or, you can use the `Promise` API.
deleteAllData().then((response) => {
  const data = response.data;
  console.log(data.run_deleteMany);
  console.log(data.restaurant_deleteMany);
  console.log(data.mileage_deleteMany);
  console.log(data.visitedRestaurant_deleteMany);
});
```

### Using `DeleteAllData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteAllDataRef } from '@dataconnect/generated';


// Call the `deleteAllDataRef()` function to get a reference to the mutation.
const ref = deleteAllDataRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteAllDataRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.run_deleteMany);
console.log(data.restaurant_deleteMany);
console.log(data.mileage_deleteMany);
console.log(data.visitedRestaurant_deleteMany);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.run_deleteMany);
  console.log(data.restaurant_deleteMany);
  console.log(data.mileage_deleteMany);
  console.log(data.visitedRestaurant_deleteMany);
});
```


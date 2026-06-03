# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getAllRuns, getAllRestaurants, getAllRunsAndRestaurants, getMileage, addRun, addRestaurant, markRestaurantVisited, unmarkRestaurantVisited, deleteRestaurant, updateMileageAfterRun } from '@dataconnect/generated';


// Operation GetAllRuns: 
const { data } = await GetAllRuns(dataConnect);

// Operation GetAllRestaurants: 
const { data } = await GetAllRestaurants(dataConnect);

// Operation GetAllRunsAndRestaurants: 
const { data } = await GetAllRunsAndRestaurants(dataConnect);

// Operation GetMileage: 
const { data } = await GetMileage(dataConnect);

// Operation AddRun:  For variables, look at type AddRunVars in ../index.d.ts
const { data } = await AddRun(dataConnect, addRunVars);

// Operation AddRestaurant:  For variables, look at type AddRestaurantVars in ../index.d.ts
const { data } = await AddRestaurant(dataConnect, addRestaurantVars);

// Operation MarkRestaurantVisited:  For variables, look at type MarkRestaurantVisitedVars in ../index.d.ts
const { data } = await MarkRestaurantVisited(dataConnect, markRestaurantVisitedVars);

// Operation UnmarkRestaurantVisited:  For variables, look at type UnmarkRestaurantVisitedVars in ../index.d.ts
const { data } = await UnmarkRestaurantVisited(dataConnect, unmarkRestaurantVisitedVars);

// Operation deleteRestaurant:  For variables, look at type DeleteRestaurantVars in ../index.d.ts
const { data } = await DeleteRestaurant(dataConnect, deleteRestaurantVars);

// Operation UpdateMileageAfterRun:  For variables, look at type UpdateMileageAfterRunVars in ../index.d.ts
const { data } = await UpdateMileageAfterRun(dataConnect, updateMileageAfterRunVars);


```
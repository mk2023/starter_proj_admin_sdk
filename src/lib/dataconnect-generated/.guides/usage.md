# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { getAllRunsAndRestaurants, getVisitedRestaurants, getMileage, addRun, addRestaurant, addVisitedRestaurant, deleteRestaurant, updateMileageAfterRun, createMileage, deleteAllData } from '@dataconnect/generated';


// Operation GetAllRunsAndRestaurants:  For variables, look at type GetAllRunsAndRestaurantsVars in ../index.d.ts
const { data } = await GetAllRunsAndRestaurants(dataConnect, getAllRunsAndRestaurantsVars);

// Operation GetVisitedRestaurants:  For variables, look at type GetVisitedRestaurantsVars in ../index.d.ts
const { data } = await GetVisitedRestaurants(dataConnect, getVisitedRestaurantsVars);

// Operation GetMileage:  For variables, look at type GetMileageVars in ../index.d.ts
const { data } = await GetMileage(dataConnect, getMileageVars);

// Operation AddRun:  For variables, look at type AddRunVars in ../index.d.ts
const { data } = await AddRun(dataConnect, addRunVars);

// Operation AddRestaurant:  For variables, look at type AddRestaurantVars in ../index.d.ts
const { data } = await AddRestaurant(dataConnect, addRestaurantVars);

// Operation AddVisitedRestaurant:  For variables, look at type AddVisitedRestaurantVars in ../index.d.ts
const { data } = await AddVisitedRestaurant(dataConnect, addVisitedRestaurantVars);

// Operation deleteRestaurant:  For variables, look at type DeleteRestaurantVars in ../index.d.ts
const { data } = await DeleteRestaurant(dataConnect, deleteRestaurantVars);

// Operation UpdateMileageAfterRun:  For variables, look at type UpdateMileageAfterRunVars in ../index.d.ts
const { data } = await UpdateMileageAfterRun(dataConnect, updateMileageAfterRunVars);

// Operation CreateMileage:  For variables, look at type CreateMileageVars in ../index.d.ts
const { data } = await CreateMileage(dataConnect, createMileageVars);

// Operation DeleteAllData: 
const { data } = await DeleteAllData(dataConnect);


```
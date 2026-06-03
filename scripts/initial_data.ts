import { initializeApp } from 'firebase-admin/app';
import { getDataConnect } from 'firebase-admin/data-connect';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

import type {
  GetMileageData,
  GetAllRunsAndRestaurantsData,
  AddRunData,
  AddRunVariables,
  AddRestaurantData,
  AddRestaurantVariables,
  CreateMileageData,
  MarkRestaurantVisitedData,
  MarkRestaurantVisitedVariables,
  UnmarkRestaurantVisitedData,
  UnmarkRestaurantVisitedVariables,
  UpdateMileageAfterRunData,
  UpdateMileageAfterRunVariables,
  CreateMileageVariables
} from '@dataconnect/admin-generated';

const app = initializeApp({
  projectId: 'minseulkim-project-1'
});

const dataConnect = getDataConnect({
  serviceId: 'starterproject',
  location: 'us-east4'
});

// Load the raw queries from queries.gql natively using Node fs
const queriesPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dataconnect/default-connector/queries.gql');
const queriesRaw = fs.readFileSync(queriesPath, 'utf-8');

async function initial_push() {
  console.log("Starting database initial setup using Firebase Node Admin SDK...");
  try {
    //Wiping all the data (reset);
    console.log("Wiping out Data!");
    await dataConnect.executeGraphql(queriesRaw, {
      operationName: 'DeleteAllData'
    });

    let current_mileage = 0;
    // Inputting Runs:
    console.log("🏃‍♂️ Logging initial workouts...");

    const runsToLog: AddRunVariables[] = [
      { date: "2026-06-01", distanceMiles: 5.0, durationMinutes: 40 },
      { date: "2026-06-02", distanceMiles: 3.5, durationMinutes: 28 }
    ];

    for (const runVars of runsToLog) {
      console.log(`   -> Logging run on ${runVars.date} (${runVars.distanceMiles} miles)`);
      await dataConnect.executeGraphql<AddRunData, AddRunVariables>(queriesRaw, {
        operationName: 'AddRun',
        variables: runVars
      });
      current_mileage += runVars.distanceMiles;
    }

    // Inputting Restarants:
    console.log("🎁 Adding restauarnts to wishlist");

    const restaurantsToAdd: AddRestaurantVariables[] = [
      { name: "Taco Loco", cuisine: "Mexican", milesRequired: 5.0 },
      { name: "Burger Haven", cuisine: "American", milesRequired: 10.0 },
      { name: "Sakura Sushi", cuisine: "Japanese", milesRequired: 25.0 }
    ];

    for (const restVars of restaurantsToAdd) {
      console.log(`   -> Creating reward: ${restVars.name} (${restVars.milesRequired} miles)`);
      await dataConnect.executeGraphql<AddRestaurantData, AddRestaurantVariables>(queriesRaw, {
        operationName: 'AddRestaurant',
        variables: restVars
      });
    }

    //Setting Current Mileage:
    await dataConnect.executeGraphql<CreateMileageData, CreateMileageVariables>(queriesRaw, {
      operationName: 'CreateMileage',
      variables: { netMiles: current_mileage }
    });

    console.log("✨ Seeding completed successfully!");
  } catch (error) {
    console.error("Database initial filling out failed with error:", error);
    process.exit(1);
  }

}

initial_push().then(() => process.exit(0));
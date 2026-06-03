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
    console.log("🏃♂️ Logging initial workouts...");

    const runsToLog: AddRunVariables[] = [
      { date: "2026-05-18", distanceMiles: 2.69, durationMinutes: 29 },
      { date: "2026-05-08", distanceMiles: 1.74, durationMinutes: 16 },
      { date: "2026-04-26", distanceMiles: 13.65, durationMinutes: 139 },
      { date: "2026-04-25", distanceMiles: 1.88, durationMinutes: 20 },
      { date: "2026-04-23", distanceMiles: 3.43, durationMinutes: 38 },
      { date: "2026-04-18", distanceMiles: 6.22, durationMinutes: 66 },
      { date: "2026-04-15", distanceMiles: 2.77, durationMinutes: 31 },
      { date: "2026-04-14", distanceMiles: 0.91, durationMinutes: 9 },
      { date: "2026-04-11", distanceMiles: 12.53, durationMinutes: 139 },
      { date: "2026-04-10", distanceMiles: 3.13, durationMinutes: 31 },
      { date: "2026-04-03", distanceMiles: 6.19, durationMinutes: 63 },
      { date: "2026-03-31", distanceMiles: 2.49, durationMinutes: 28 },
      { date: "2026-03-29", distanceMiles: 5.21, durationMinutes: 61 },
      { date: "2026-03-26", distanceMiles: 1.90, durationMinutes: 21 },
      { date: "2026-03-25", distanceMiles: 3.13, durationMinutes: 33 },
      { date: "2026-03-22", distanceMiles: 2.80, durationMinutes: 30 },
      { date: "2026-03-11", distanceMiles: 3.11, durationMinutes: 31 },     
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
    //Beli Price Ranking:
    //$$ ==> 3
    //$$$ ==> 4
    //$$$$ ==> 5

    const restaurantsToAdd: AddRestaurantVariables[] = [
      { name: "Mr. Pollo", cuisine: "Colombian", milesRequired: 4.0 },
      { name: "San Ho Won", cuisine: "Korean", milesRequired: 5.0 },
      { name: "Saison", cuisine: "American", milesRequired: 5.0 },
      { name: "Californios", cuisine: "Mexican", milesRequired: 5.0 },
      { name: "Picaro", cuisine: "Mexican", milesRequired: 3.0 },
      { name: "Canela Bistro & Wine Bar", cuisine: "Spanish Tapas", milesRequired: 4.0 },
      { name: "Khao Tiew", cuisine: "Thai", milesRequired: 3.0 },
      { name: "The Happy Crane", cuisine: "Chinese", milesRequired: 5.0 },
      { name: "Cotogna", cuisine: "Italian", milesRequired: 4.0 },
      { name: "Nari", cuisine: "Thai", milesRequired: 4.0 },
      { name: "Tanzie's", cuisine: "Thai", milesRequired: 3.0 },
      { name: "Cache", cuisine: "French", milesRequired: 4.0 },
      { name: "Nisei", cuisine: "Japanese", milesRequired: 5.0 },
      { name: "Han Il Kwan", cuisine: "Korean", milesRequired: 4.0 },
      { name: "Boiling Hot Pot", cuisine: "Hot pot", milesRequired: 3.0 },
      { name: "Praaw Thai", cuisine: "Thai", milesRequired: 3.0 }
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
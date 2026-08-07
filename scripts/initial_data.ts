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

    console.log("✨ Seeding completed successfully!");
  } catch (error) {
    console.error("Database initial filling out failed with error:", error);
    process.exit(1);
  }

}

initial_push().then(() => process.exit(0));
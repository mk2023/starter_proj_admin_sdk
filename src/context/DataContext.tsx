import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Run, Restaurant, VisitedRestaurant } from '../types';

import { dataConnectInstance } from '../lib/firebase';
import {
  getAllRunsAndRestaurants,
  getMileage,
  addRun,
  addVisitedRestaurant,
  updateMileageAfterRun,
  type AddRunVariables,
  type AddVisitedRestaurantVariables,
  type UpdateMileageAfterRunVariables,
  getVisitedRestaurants
} from '@dataconnect/generated';

import { useAuth } from './AuthContext';

interface DataContextType {
  runs: Run[];
  restaurants: Restaurant[];
  visitedRestaurants: VisitedRestaurant[];
  mileageLeft: number;
  loadDashboardData: () => Promise<void>;
  handleLogRun: (date: string, distance: number, duration: number) => Promise<void>;
  handleClaimReward: (restaurant: Restaurant) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const [runs, setRuns] = useState<Run[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [visitedRestaurants, setVisitedRestaurants] = useState<VisitedRestaurant[]>([]);
  const [mileageLeft, setMileageLeft] = useState<number>(0);

  const loadDashboardData = async () => {
    if (!currentUser) return; //wait until logged in
    try {
      //Fetch wishlist & runs
      console.log("🔄 Loading dashboard data...");
      const response = await getAllRunsAndRestaurants(dataConnectInstance, { userId: currentUser.uid }, { fetchPolicy: 'SERVER_ONLY' });
      console.log("   -> Fetched runs:", response.data.runs?.length, "restaurants:", response.data.restaurants?.length);
      setRuns(response.data.runs || []);
      setRestaurants(response.data.restaurants || []);

      //get the visited restaurants
      const visitedResponse = await getVisitedRestaurants(dataConnectInstance, { userId: currentUser.uid }, { fetchPolicy: 'SERVER_ONLY' });
      console.log("   -> Fetched visited restaurants:", visitedResponse.data.visitedRestaurants?.length);
      setVisitedRestaurants(visitedResponse.data.visitedRestaurants || []);

      //get mileage:
      const mileageData = await getMileage(dataConnectInstance, { userId: currentUser.uid }, { fetchPolicy: 'SERVER_ONLY' });
      if (mileageData.data.mileage) {
        setMileageLeft(mileageData.data.mileage.netMiles);
        console.log("   -> Set mileageLeft to:", mileageData.data.mileage.netMiles);
      } else {
        setMileageLeft(0);
        console.log("   -> No mileage row found, set mileageLeft to 0");
      }
    } catch (err) {
      console.error("❌ Failed to load data via Client SDK:", err);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleLogRun = async (date: string, distance: number, duration: number) => {
    try {
      console.log(`🏃‍♂️ Logging run: date=${date}, distance=${distance}, duration=${duration}`);
      const variables: AddRunVariables = { date, distanceMiles: distance, durationMinutes: duration };
      const runResult = await addRun(dataConnectInstance, variables);
      console.log("   -> addRun result:", runResult);

      const newCalculatedBalance = mileageLeft + distance;
      console.log(`   -> Current mileageLeft=${mileageLeft}, adding distance=${distance}. New balance will be=${newCalculatedBalance}`);

      const updateVariables: UpdateMileageAfterRunVariables = { userId: currentUser!.uid, netMiles: newCalculatedBalance };
      console.log("   -> Calling updateMileageAfterRun with:", updateVariables);
      const updateResult = await updateMileageAfterRun(dataConnectInstance, updateVariables);
      console.log("   -> updateMileageAfterRun result:", updateResult);

      console.log("   -> Reloading dashboard...");
      await loadDashboardData();
    } catch (err) {
      console.error("❌ Failed to log run:", err);
      throw err;
    }
  };

  const handleClaimReward = async (restaurant: Restaurant) => {
    try {
      console.log(`🎁 Claiming reward for restaurant: name=${restaurant.name}, milesRequired=${restaurant.milesRequired}`);
      const variables: AddVisitedRestaurantVariables = { name: restaurant.name, cuisine: restaurant.cuisine };
      const visitResult = await addVisitedRestaurant(dataConnectInstance, variables);
      console.log("   -> addVisitedRestaurant result:", visitResult);

      const newCalculatedBalance = mileageLeft - restaurant.milesRequired;
      console.log(`   -> Current mileageLeft=${mileageLeft}, deducting cost=${restaurant.milesRequired}. New balance will be=${newCalculatedBalance}`);

      const updateVariables: UpdateMileageAfterRunVariables = { userId: currentUser!.uid, netMiles: newCalculatedBalance };
      const updateResult = await updateMileageAfterRun(dataConnectInstance, updateVariables);
      console.log("   -> updateMileageAfterRun result:", updateResult);

      await loadDashboardData();
    } catch (err) {
      console.error("❌ Claim reward failed:", err);
    }
  };

  return (
    <div className="dashboard-container">
      <DataContext.Provider value={{
        runs,
        restaurants,
        mileageLeft,
        loadDashboardData,
        handleLogRun,
        handleClaimReward,
        visitedRestaurants
      }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

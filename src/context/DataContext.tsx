import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Run, Restaurant } from '../types';

import { dataConnectInstance } from '../lib/firebase';
import {
  getAllRunsAndRestaurants,
  getMileage,
  addRun,
  addRestaurant,
  markRestaurantVisited,
  unmarkRestaurantVisited,
  updateMileageAfterRun,
  type AddRunVariables,
  type AddRestaurantVariables,
  type MarkRestaurantVisitedVariables,
  type UnmarkRestaurantVisitedVariables,
  type UpdateMileageAfterRunVariables
} from '@dataconnect/generated';

interface DataContextType {
  runs: Run[];
  restaurants: Restaurant[];
  mileageLeft: number;
  loadDashboardData: () => Promise<void>;
  handleLogRun: (date: string, distance: number, duration: number) => Promise<void>;
  handleAddRestaurant: (name: string, cuisine: string, milesRequired: number) => Promise<void>;
  handleClaimReward: (restaurant: Restaurant) => Promise<void>;
  handleUndoReward: (restaurant: Restaurant) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [runs, setRuns] = useState<Run[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [mileageLeft, setMileageLeft] = useState<number>(0);
  const [mileageId, setMileageId] = useState<string | null>(null);

  const loadDashboardData = async () => {
    try {
      const response = await getAllRunsAndRestaurants(dataConnectInstance);
      setRuns(response.data.runs || []);
      setRestaurants(response.data.restaurants || []);

      const mileageData = await getMileage(dataConnectInstance);
      if (mileageData.data.mileages && mileageData.data.mileages.length > 0) {
        setMileageLeft(mileageData.data.mileages[0].netMiles);
        setMileageId(mileageData.data.mileages[0].id);
      } else {
        setMileageLeft(0);
        setMileageId(null);
      }
    } catch (err) {
      console.error("Failed to load data via Client SDK:", err);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleLogRun = async (date: string, distance: number, duration: number) => {
    try {
      const variables: AddRunVariables = { date, distanceMiles: distance, durationMinutes: duration };
      await addRun(dataConnectInstance, variables);

      const newCalculatedBalance = mileageLeft + distance;
      const updateVariables: UpdateMileageAfterRunVariables = { id: mileageId!, netMiles: newCalculatedBalance };
      if (mileageId) {
        await updateMileageAfterRun(dataConnectInstance, updateVariables);
      }

      await loadDashboardData();
    } catch (err) {
      console.error("Failed to log run:", err);
      throw err;
    }
  };

  const handleAddRestaurant = async (name: string, cuisine: string, milesRequired: number) => {
    try {
      const variables: AddRestaurantVariables = { name, cuisine, milesRequired };
      await addRestaurant(dataConnectInstance, variables);
      await loadDashboardData();
    } catch (err) {
      console.error("Failed to add restaurant item:", err);
      throw err;
    }
  };

  const handleClaimReward = async (restaurant: Restaurant) => {
    try {
      const variables: MarkRestaurantVisitedVariables = { id: restaurant.id };
      await markRestaurantVisited(dataConnectInstance, variables);

      const newCalculatedBalance = mileageLeft - restaurant.milesRequired;
      const updateVariables: UpdateMileageAfterRunVariables = { id: mileageId!, netMiles: newCalculatedBalance };
      if (mileageId) {
        await updateMileageAfterRun(dataConnectInstance, updateVariables);
      }

      await loadDashboardData();
    } catch (err) {
      console.error("Claim reward failed:", err);
    }
  };

  const handleUndoReward = async (restaurant: Restaurant) => {
    try {
      const variables: UnmarkRestaurantVisitedVariables = { id: restaurant.id };
      await unmarkRestaurantVisited(dataConnectInstance, variables);

      const newCalculatedBalance = mileageLeft + restaurant.milesRequired;
      const updateVariables: UpdateMileageAfterRunVariables = { id: mileageId!, netMiles: newCalculatedBalance };
      if (mileageId) {
        await updateMileageAfterRun(dataConnectInstance, updateVariables);
      }

      await loadDashboardData();
    } catch (err) {
      console.error("Undo reward failed:", err);
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
        handleAddRestaurant,
        handleClaimReward,
        handleUndoReward
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

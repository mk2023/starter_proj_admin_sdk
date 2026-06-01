import React, { useEffect, useState } from 'react';
import './App.css'; // This imports your style classes!

interface Run {
  id: string;
  date: string;
  distanceMiles: number;
  durationMinutes: number;
}

interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  milesRequired: number;
  isVisited: boolean;
}

export default function App() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const [runDate, setRunDate] = useState('2026-06-01');
  const [runDistance, setRunDistance] = useState('');
  const [runDuration, setRunDuration] = useState('');

  const [restName, setRestName] = useState('');
  const [restCuisine, setRestCuisine] = useState('');
  const [restMiles, setRestMiles] = useState('');

  const loadDashboardData = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/dashboard');
      const data = await res.json();
      setRuns(data.runs || []);
      setRestaurants(data.restaurants || []);
    } catch (err) {
      console.error("Failed to load dashboard from local server:", err);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const handleLogRun = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!runDistance || !runDuration) return;

    try {
      await fetch('http://localhost:3001/api/runs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: runDate,
          distanceMiles: parseFloat(runDistance),
          durationMinutes: parseInt(runDuration)
        })
      });
      setRunDistance('');
      setRunDuration('');
      loadDashboardData();
    } catch (err) {
      console.error("Failed to add run:", err);
    }
  };

  const handleAddRestaurant = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restName || !restCuisine || !restMiles) return;

    try {
      await fetch('http://localhost:3001/api/restaurants', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: restName,
          cuisine: restCuisine,
          milesRequired: parseFloat(restMiles)
        })
      });
      setRestName('');
      setRestCuisine('');
      setRestMiles('');
      loadDashboardData();
    } catch (err) {
      console.error("Failed to add restaurant:", err);
    }
  };

  const handleClaimReward = async (id: string) => {
    try {
      await fetch('http://localhost:3001/api/restaurants/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      loadDashboardData(); 
    } catch (err) {
      console.error("Claim reward failed:", err);
    }
  };

  // Trigger mutation via server route to undo a claimed reward
  const handleUndoReward = async (id: string) => {
    try {
      await fetch('http://localhost:3001/api/restaurants/unvisit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      loadDashboardData(); // Refresh metrics and lists instantly!
    } catch (err) {
      console.error("Undo reward failed:", err);
    }
  };

  const totalMilesEarned = runs.reduce((sum, run) => sum + run.distanceMiles, 0);
  const totalMilesSpent = restaurants
    .filter(r => r.isVisited)
    .reduce((sum, r) => sum + r.milesRequired, 0);
  const mileageLeft = totalMilesEarned - totalMilesSpent;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">🏃‍♂️ Mileage Marketplace Dashboard</h1>
        <div className="stats-row">
          <div className="stat-card">
            <span className="stat-label">Total Distance Run</span>
            <span className="stat-number">{totalMilesEarned.toFixed(1)} mi</span>
          </div>
          <div className="stat-card available">
            <span className="stat-label">Miles Available to Spend</span>
            <span className="stat-number">{mileageLeft.toFixed(1)} mi</span>
          </div>
        </div>
      </header>

      <section className="form-container-grid">
        <form onSubmit={handleLogRun} className="form-card">
          <h3 className="form-title">➕ Log a New Workout Run</h3>
          <div className="input-group">
            <input type="date" value={runDate} onChange={(e) => setRunDate(e.target.value)} className="input-field" />
            <input type="number" step="0.1" placeholder="Distance (miles)" value={runDistance} onChange={(e) => setRunDistance(e.target.value)} className="input-field" />
            <input type="number" placeholder="Duration (minutes)" value={runDuration} onChange={(e) => setRunDuration(e.target.value)} className="input-field" />
          </div>
          <button type="submit" className="submit-button">Log Run Workout</button>
        </form>

        <form onSubmit={handleAddRestaurant} className="form-card">
          <h3 className="form-title">➕ Add a New Reward Restaurant</h3>
          <div className="input-group">
            <input type="text" placeholder="Restaurant Name" value={restName} onChange={(e) => setRestName(e.target.value)} className="input-field" />
            <input type="text" placeholder="Cuisine Type" value={restCuisine} onChange={(e) => setRestCuisine(e.target.value)} className="input-field" />
            <input type="number" step="0.5" placeholder="Miles Required" value={restMiles} onChange={(e) => setRestMiles(e.target.value)} className="input-field" />
          </div>
          <button type="submit" className="submit-button secondary">Create Reward Item</button>
        </form>
      </section>

      <main className="main-grid">
        <section className="column">
          <h2 className="column-title">🎁 Available Rewards</h2>
          {restaurants.filter(r => !r.isVisited).map(restaurant => {
            const canAfford = mileageLeft >= restaurant.milesRequired;
            return (
              <div key={restaurant.id} className="item-card">
                <div>
                  <h3 className="item-name">{restaurant.name}</h3>
                  <p className="item-meta">{restaurant.cuisine} • <strong className="highlight-text">{restaurant.milesRequired} miles</strong></p>
                </div>
                <button 
                  disabled={!canAfford}
                  onClick={() => handleClaimReward(restaurant.id)}
                  className={canAfford ? 'button-active' : 'button-disabled'}
                >
                  {canAfford ? 'Claim Reward' : 'Locked 🔒'}
                </button>
              </div>
            );
          })}
        </section>

        <section className="column">
          <h2 className="column-title">✅ Visited History</h2>
          {restaurants.filter(r => r.isVisited).map(restaurant => (
            <div key={restaurant.id} className="item-card visited">
              <div>
                <h3 className="item-name" style={{ textDecoration: 'line-through' }}>{restaurant.name}</h3>
                <p className="item-meta">{restaurant.cuisine} • Cashed in! 🎉</p>
              </div>
              <button 
                onClick={() => handleUndoReward(restaurant.id)} 
                className="button-active" 
                style={{ backgroundColor: '#EF4444' }} /* Making this one red for "Undo" */
              >
              Undo Visit ↩️
              </button>
              <span className="visited-badge">Visited</span>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
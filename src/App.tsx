import React from 'react';
import './App.css';

//Important Authentication Components
import { useAuth } from './context/AuthContext';
import { AuthForm } from './components/AuthForm';

// Import components
import { StatCard } from './components/StatCard';
import { RunForm } from './components/RunForm';
import { RestaurantForm } from './components/RestaurantForm';
import { RestaurantCard } from './components/RestaurantCard';

// Import Context
import { DataProvider, useData } from './context/DataContext';


function AppContent() {
  const {
    runs,
    restaurants,
    mileageLeft,
    handleLogRun,
    visitedRestaurants,
    handleClaimReward
  } = useData();

  const { logout } = useAuth();
  const [showRunsModal, setShowRunsModal] = React.useState(false);

  const toVisitRestaurants = restaurants.filter(
    restaurant => !visitedRestaurants.some(visited => visited.name === restaurant.name)
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h1 className="dashboard-title" style={{ margin: 0 }}>🏃‍♂️ Mileage for Restaurant Dashboard</h1>
          <button
            onClick={logout}
            className="button-active"
            style={{ backgroundColor: '#EF4444' }}
          >
            Log Out ➔
          </button>
        </div>
        <div className="stats-row">
          <StatCard
            label="Miles Available to Spend"
            value={`${mileageLeft.toFixed(1)} mi`}
            className="available"
          />
          <button
            onClick={() => setShowRunsModal(true)}
            className="button-active"
            style={{ alignSelf: 'center', height: 'fit-content', padding: '0.85rem 1.5rem' }}
          >
            Look at all your runs 🏃‍♂️
          </button>
        </div>
      </header>

      <section className="form-container-grid" style={{ gridTemplateColumns: '1fr' }}>
        <RunForm onLogRun={handleLogRun} />
      </section>

      <main className="main-grid">
        <section className="column">
          <h2 className="column-title">🎁 To Visit:</h2>
          {toVisitRestaurants.map(restaurant => {
            const canAfford = mileageLeft >= restaurant.milesRequired;
            return (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                isVisited={false}
                canAfford={canAfford}
                onAction={handleClaimReward}
              />
            );
          })}
        </section>

        <section className="column">
          <h2 className="column-title">✅ Visited History</h2>
          {visitedRestaurants.map(restaurant => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={{ ...restaurant, milesRequired: 0 }}
              isVisited={true}
              onAction={() => { }}
            />
          ))}
        </section>
      </main>

      {showRunsModal && (
        <div className="modal-overlay" onClick={() => setShowRunsModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🏃‍♂️ Your Running History</h2>
              <button className="close-button" onClick={() => setShowRunsModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <table className="runs-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Distance (mi)</th>
                    <th>Duration (min)</th>
                  </tr>
                </thead>
                <tbody>
                  {runs.map(run => (
                    <tr key={run.id}>
                      <td>{run.date}</td>
                      <td>{run.distanceMiles.toFixed(2)}</td>
                      <td>{run.durationMinutes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const { currentUser } = useAuth(); //get the current User
  if (!currentUser) { //if not logged in, make them log in
    return <AuthForm />;
  }
  return (
    <DataProvider>
      <AppContent />
    </DataProvider>
  );
}
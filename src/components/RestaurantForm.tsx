import React, { useState } from 'react';

interface RestaurantFormProps {
  onAddRestaurant: (name: string, cuisine: string, milesRequired: number) => Promise<void>;
}

export const RestaurantForm: React.FC<RestaurantFormProps> = ({ onAddRestaurant }) => {
  const [restName, setRestName] = useState('');
  const [restCuisine, setRestCuisine] = useState('');
  const [restMiles, setRestMiles] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!restName || !restCuisine || !restMiles) return;

    try {
      await onAddRestaurant(restName, restCuisine, parseFloat(restMiles));
      setRestName('');
      setRestCuisine('');
      setRestMiles('');
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3 className="form-title">➕ Add a New Restaurant </h3>
      <div className="input-group">
        <input type="text" placeholder="Restaurant Name" value={restName} onChange={(e) => setRestName(e.target.value)} className="input-field" />
        <input type="text" placeholder="Cuisine Type" value={restCuisine} onChange={(e) => setRestCuisine(e.target.value)} className="input-field" />
        <input type="number" step="0.5" placeholder="Miles Required" value={restMiles} onChange={(e) => setRestMiles(e.target.value)} className="input-field" />
      </div>
      <button type="submit" className="submit-button secondary">Add Restaurant</button>
    </form>
  );
};

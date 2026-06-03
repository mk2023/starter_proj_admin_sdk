import React from 'react';
import type { Restaurant } from '../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  isVisited: boolean;
  canAfford?: boolean;
  onAction: (restaurant: Restaurant) => void;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  isVisited,
  canAfford = true,
  onAction
}) => {
  if (isVisited) {
    return (
      <div className="item-card visited">
        <div>
          <h3 className="item-name" style={{ textDecoration: 'line-through' }}>{restaurant.name}</h3>
          <p className="item-meta">{restaurant.cuisine} • Already Visited! 🎉</p>
        </div>
        <button
          onClick={() => onAction(restaurant)}
          className="button-active"
          style={{ backgroundColor: '#EF4444' }}
        >
          Undo Visit ↩️
        </button>
      </div>
    );
  }

  return (
    <div className="item-card">
      <div>
        <h3 className="item-name">{restaurant.name}</h3>
        <p className="item-meta">{restaurant.cuisine} • <strong className="highlight-text">{restaurant.milesRequired} miles</strong></p>
      </div>
      <button
        disabled={!canAfford}
        onClick={() => onAction(restaurant)}
        className={canAfford ? 'button-active' : 'button-disabled'}
      >
        {canAfford ? 'Claim Reward' : 'Locked 🔒'}
      </button>
    </div>
  );
};

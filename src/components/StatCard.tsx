import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, className }) => {
  return (
    <div className={`stat-card ${className || ''}`}>
      <span className="stat-label">{label}</span>
      <span className="stat-number">{value}</span>
    </div>
  );
};

import React, { useState } from 'react';

interface RunFormProps {
  onLogRun: (date: string, distance: number, duration: number) => Promise<void>;
}

export const RunForm: React.FC<RunFormProps> = ({ onLogRun }) => {
  const [runDate, setRunDate] = useState('2026-06-01');
  const [runDistance, setRunDistance] = useState('');
  const [runDuration, setRunDuration] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!runDistance || !runDuration) return;

    try {
      await onLogRun(runDate, parseFloat(runDistance), parseInt(runDuration));
      setRunDistance('');
      setRunDuration('');
    } catch (err) {
      console.error("Form submission failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3 className="form-title">➕ Log a New Run</h3>
      <div className="input-group">
        <input type="date" value={runDate} onChange={(e) => setRunDate(e.target.value)} className="input-field" />
        <input type="number" step="0.1" placeholder="Distance (miles)" value={runDistance} onChange={(e) => setRunDistance(e.target.value)} className="input-field" />
        <input type="number" placeholder="Duration (minutes)" value={runDuration} onChange={(e) => setRunDuration(e.target.value)} className="input-field" />
      </div>
      <button type="submit" className="submit-button">Log Run</button>
    </form>
  );
};

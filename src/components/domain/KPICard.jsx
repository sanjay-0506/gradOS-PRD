import React from 'react';
export default function KPICard({ title, value, unit }){
  return (
    <div className="kpi-card card">
      <div className="label">{title}</div>
      <div className="value">{value}{unit ? ` ${unit}` : ''}</div>
    </div>
  );
}

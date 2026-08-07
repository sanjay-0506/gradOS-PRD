import React from 'react';

export default function ChartCard({ title, children }){
  return (
    <div className="chart-card card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>{title}</strong>
      </div>
      <div style={{marginTop:12}}>
        {children || <div style={{height:140,display:'flex',alignItems:'center',justifyContent:'center',color:'#9aa0a6'}}>Chart placeholder</div>}
      </div>
    </div>
  );
}

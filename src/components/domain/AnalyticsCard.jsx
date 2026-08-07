import React from 'react';

export default function AnalyticsCard({ title, children }){
  return (
    <div className="card" style={{padding:12}}>
      <strong>{title}</strong>
      <div style={{marginTop:10}}>{children || <div style={{height:120,display:'flex',alignItems:'center',justifyContent:'center',color:'#9aa0a6'}}>Insight chart</div>}</div>
    </div>
  );
}

import React from 'react';
import ProgressBar from './ProgressBar';

export default function RoadmapCard({ item }){
  return (
    <div className="roadmap-card card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <strong>{item.title}</strong>
        <div style={{fontSize:12,color:'#6b7280'}}>{item.progress}%</div>
      </div>
      <div style={{fontSize:12,color:'#6b7280',marginTop:8}}>Current: {item.current}</div>
      <div style={{fontSize:12,color:'#6b7280'}}>Remaining modules: {item.remaining}</div>
      <div style={{marginTop:10}}>
        <ProgressBar value={item.progress} />
      </div>
      <div style={{marginTop:10, textAlign:'right'}}>
        <button className="btn">Continue</button>
      </div>
    </div>
  );
}

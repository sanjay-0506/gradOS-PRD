import React from 'react';

export default function SkillBadge({ label, level }){
  return (
    <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'#f1f9f8',padding:'6px 8px',borderRadius:8,fontSize:13}}>
      <strong style={{color:'#0fa99a'}}>{label}</strong>
      <span style={{color:'#6b7280'}}>{level}</span>
    </div>
  );
}

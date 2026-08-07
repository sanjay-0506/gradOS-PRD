import React from 'react';

export default function ProgressBar({ value = 0 }){
  const width = Math.max(0, Math.min(100, value));
  return (
    <div style={{background:'#eef2f7',height:8,borderRadius:8,overflow:'hidden'}}>
      <div style={{width:`${width}%`,height:8,background:'#0fa99a'}} />
    </div>
  );
}

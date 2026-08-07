import React from 'react';

export default function AssessmentCard({ item }){
  return (
    <div className="card" style={{padding:12}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{item.domain}</div>
          <div style={{fontSize:12,color:'#6b7280'}}>{item.difficulty} • {item.questions} q</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>{item.xp} XP</div>
          <div style={{fontSize:12,color:'#6b7280'}}>{item.duration}</div>
        </div>
      </div>
      <div style={{marginTop:10,textAlign:'right'}}>
        <button className="btn">Attempt</button>
      </div>
    </div>
  );
}

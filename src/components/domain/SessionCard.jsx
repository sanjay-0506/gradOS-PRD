import React from 'react';

export default function SessionCard({ session }){
  return (
    <div className="session-card card">
      <div style={{display:'flex',justifyContent:'space-between'}}>
        <div>
          <div style={{fontWeight:700}}>{session.title}</div>
          <div style={{fontSize:12,color:'#6b7280'}}>{session.date} • {session.duration}</div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:700}}>{session.score}%</div>
          <div style={{fontSize:12,color:'#6b7280'}}>{session.certificate ? 'Certificate' : '—'}</div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import Table from './Table';
import { SESSIONS } from '../../pages/domain/MockData';

export default function Completed(){
  const columns = [
    { key: 'title', title: 'Session' },
    { key: 'date', title: 'Date' },
    { key: 'duration', title: 'Duration' },
    { key: 'score', title: 'Score' },
    { key: 'certificate', title: 'Certificate' }
  ];

  const data = SESSIONS.map(s=>({ title:s.title, date:s.date, duration:s.duration, score: s.score, certificate: s.certificate ? 'Yes' : 'No' }));

  return (
    <div>
      <section className="section">
        <div className="section-header"><h3>Completed Sessions</h3></div>
        <Table columns={columns} data={data} />
      </section>

      <section className="section">
        <div className="card">
          <h4>Statistics</h4>
          <div style={{display:'flex',gap:12,marginTop:12}}>
            <div className="kpi-card card" style={{flex:1}}>
              <div className="label">Total Sessions</div>
              <div className="value">{SESSIONS.length}</div>
            </div>
            <div className="kpi-card card" style={{flex:1}}>
              <div className="label">Hours Learned</div>
              <div className="value">{(SESSIONS.length * 0.75).toFixed(1)} hrs</div>
            </div>
            <div className="kpi-card card" style={{flex:1}}>
              <div className="label">Average Score</div>
              <div className="value">{Math.round(SESSIONS.reduce((a,b)=>a+b.score,0)/SESSIONS.length)}%</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

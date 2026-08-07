import React from 'react';
import KPICard from './KPICard';
import ChartCard from './ChartCard';
import RoadmapCard from './RoadmapCard';
import SessionCard from './SessionCard';
import { KPIS, ROADMAP, UPCOMING } from '../../pages/domain/MockData';

export default function Overview(){
  return (
    <div>
      <section className="section">
        <div className="cards-grid">
          {KPIS.map(k => (
            <KPICard key={k.id} title={k.title} value={k.value} unit={k.unit} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Charts</h3>
          <div className="muted">Weekly / Monthly overview</div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16}}>
          <ChartCard title="Weekly Progress" />
          <div style={{display:'flex',flexDirection:'column',gap:12}}>
            <ChartCard title="Skill Radar" />
            <ChartCard title="Topic Distribution" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Current Learning Path</h3>
          <div/>
        </div>
        <div className="roadmap-list">
          {ROADMAP.map(r => <RoadmapCard key={r.id} item={r} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>Upcoming Sessions</h3>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:16}}>
          <div>
            <div className="card">
              <table className="upcoming-table" style={{width:'100%'}}>
                <thead>
                  <tr><th>Date</th><th>Topic</th><th>Mentor</th><th>Duration</th><th>Status</th><th></th></tr>
                </thead>
                <tbody>
                  {UPCOMING.map(u => (
                    <tr key={u.id}>
                      <td>{u.date}</td>
                      <td>{u.topic}</td>
                      <td>{u.mentor}</td>
                      <td>{u.duration}</td>
                      <td>{u.status}</td>
                      <td><button className="btn">Join</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div className="card">
              <h4>Weak Areas</h4>
              <div style={{marginTop:8}}>
                <div style={{marginBottom:8}}><strong>AI</strong> — Difficulty: High — Recommendation: "Start with ML basics"</div>
                <div style={{marginBottom:8}}><strong>Cloud</strong> — Difficulty: Medium — Recommendation: "Follow hands-on labs"</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

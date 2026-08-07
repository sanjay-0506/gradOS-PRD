import React from 'react';
import { ROADMAP } from '../../pages/domain/MockData';
import RoadmapCard from './RoadmapCard';

export default function TodaySession(){
  return (
    <div>
      <section className="section">
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div>
              <h3 style={{margin:0}}>Today's Topic: Binary Trees</h3>
              <div style={{color:'#6b7280'}}>Difficulty: Medium • Est: 45m • XP: 40</div>
            </div>
            <div style={{textAlign:'right'}}>
              <div style={{fontSize:12,color:'#6b7280'}}>Progress</div>
              <div style={{fontWeight:700}}>40%</div>
              <div style={{marginTop:10}}>
                <button className="btn">Start Session</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header"><h3>Learning Material</h3></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 260px',gap:12}}>
          <div className="card">
            <div style={{display:'flex',gap:12}}>
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>Notes</div>
                <div style={{marginTop:8,color:'#6b7280'}}>Concise notes for today's topic.</div>
                <div style={{marginTop:12}}>
                  <button className="btn">Open PDF</button>
                </div>
              </div>
              <div style={{width:160}}>
                <div style={{fontWeight:700}}>Video</div>
                <div style={{marginTop:8,color:'#6b7280'}}>Intro video • 12m</div>
                <div style={{marginTop:12}}>
                  <button className="btn ghost">Play</button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="card">
              <h4>Practice Problems</h4>
              <div style={{marginTop:8}}>
                <div style={{marginBottom:8}}>1) Validate BST — Medium <button style={{float:'right'}} className="btn ghost">Solve</button></div>
                <div style={{marginBottom:8}}>2) Tree Traversals — Easy <button style={{float:'right'}} className="btn ghost">Solve</button></div>
              </div>
            </div>

            <div style={{height:12}} />

            <div className="card">
              <h4>Mini Quiz (5 Q)</h4>
              <div style={{marginTop:8}}>Time: 8m <button style={{float:'right'}} className="btn">Start</button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header"><h3>Suggested Next Modules</h3></div>
        <div className="roadmap-list">
          {ROADMAP.slice(0,3).map(r => <RoadmapCard key={r.id} item={r} />)}
        </div>
      </section>
    </div>
  );
}

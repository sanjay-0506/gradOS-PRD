import React from 'react';
import AnalyticsCard from './AnalyticsCard';
import { SKILL_SUMMARY } from '../../pages/domain/MockData';

export default function Analytics(){
  return (
    <div>
      <section className="section">
        <div className="section-header"><h3>Analytics</h3></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
          <AnalyticsCard title="Skill Growth" />
          <AnalyticsCard title="Topic Completion" />
          <AnalyticsCard title="Monthly Hours" />
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h4>AI Insights</h4>
          <div style={{display:'flex',gap:16,marginTop:12}}>
            <div style={{flex:1}}>
              <div><strong>Strongest Skill</strong></div>
              <div style={{color:'#6b7280'}}>{SKILL_SUMMARY.strongest}</div>
            </div>
            <div style={{flex:1}}>
              <div><strong>Weakest Skill</strong></div>
              <div style={{color:'#6b7280'}}>{SKILL_SUMMARY.weakest}</div>
            </div>
            <div style={{flex:1}}>
              <div><strong>Recommended Next</strong></div>
              <div style={{color:'#6b7280'}}>{SKILL_SUMMARY.recommended}</div>
            </div>
            <div style={{flex:1}}>
              <div><strong>Expected Readiness</strong></div>
              <div style={{color:'#6b7280'}}>{SKILL_SUMMARY.expectedReadiness}%</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

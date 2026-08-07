import React from 'react';
import AssessmentCard from './AssessmentCard';
import { ASSESSMENTS } from '../../pages/domain/MockData';

export default function Assessment(){
  return (
    <div>
      <section className="section">
        <div className="section-header"><h3>Assessments</h3></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
          {ASSESSMENTS.map(a => <AssessmentCard key={a.id} item={a} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-header"><h3>Recent Assessments</h3></div>
        <div className="card">
          <div style={{display:'flex',justifyContent:'space-between'}}>
            <div>
              <div style={{fontWeight:700}}>Last: DSA Challenge</div>
              <div style={{color:'#6b7280'}}>Score: 78 • Rank: 24 • Percentile: 68</div>
            </div>
            <div>
              <button className="btn">Review</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import DomainTopbar from '../../components/domain/DomainTopbar';
import Overview from '../../components/domain/Overview';
import TodaySession from '../../components/domain/TodaySession';
import Completed from '../../components/domain/Completed';
import Assessment from '../../components/domain/Assessment';
import Analytics from '../../components/domain/Analytics';
import './scss/Domain.scss';

const TABS = ['Overview', "Today's Session", 'Completed', 'Assessment', 'Analytics'];

export default function DomainPage() {
  const [active, setActive] = useState('Overview');

  return (
    <div className="domain-page">
      <div className="domain-container">
        <DomainTopbar tabs={TABS} active={active} onChange={setActive} />
        <div className="domain-content">
          {active === 'Overview' && <Overview />}
          {active === "Today's Session" && <TodaySession />}
          {active === 'Completed' && <Completed />}
          {active === 'Assessment' && <Assessment />}
          {active === 'Analytics' && <Analytics />}
        </div>
      </div>
    </div>
  );
}

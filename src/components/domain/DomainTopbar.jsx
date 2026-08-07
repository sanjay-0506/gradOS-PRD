import React from 'react';
import '../../pages/domain/scss/Domain.scss';

export default function DomainTopbar({ tabs = [], active, onChange }){
  return (
    <div className="domain-topbar">
      <nav className="domain-nav">
        {tabs.map(t => (
          <div key={t} className={"tab " + (t === active ? 'active' : '')} onClick={()=>onChange(t)}>
            <div className="label">{t}</div>
            <div className="underline" />
          </div>
        ))}
      </nav>
    </div>
  );
}

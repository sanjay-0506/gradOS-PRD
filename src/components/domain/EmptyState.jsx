import React from 'react';
export default function EmptyState({ title='Nothing here', subtitle='No items to show', children }){
  return (
    <div className="card" style={{textAlign:'center',padding:30}}>
      <div style={{fontSize:18,fontWeight:700}}>{title}</div>
      <div style={{color:'#6b7280',marginTop:8}}>{subtitle}</div>
      {children && <div style={{marginTop:12}}>{children}</div>}
    </div>
  );
}

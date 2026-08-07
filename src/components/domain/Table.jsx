import React from 'react';

export default function Table({ columns = [], data = [] }){
  return (
    <div className="card" style={{overflowX:'auto'}}>
      <table className="upcoming-table" style={{width:'100%'}}>
        <thead>
          <tr>
            {columns.map(col => <th key={col.key}>{col.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {columns.map(c => <td key={c.key}>{row[c.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

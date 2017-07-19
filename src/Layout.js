import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6 wrap">
        {children}
      </div>
    </div>
  );
}

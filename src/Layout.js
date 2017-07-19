import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 wrap">
        {children}
      </div>
    </div>
  );
}

import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Helllo, world!</h1>
      <div>still working?</div>
      <input type="text"/>
      {children}
    </div>
  );
}

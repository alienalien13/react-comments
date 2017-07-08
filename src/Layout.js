import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <h1>Helllo, world!</h1>
      <div>pracuje mrazinushka</div>
      <input type="text"/>
      {children}
    </div>
  );
}

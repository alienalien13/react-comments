import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <input type="text"/>
      <input type="text"/>
      <input type="button" value="Add comment"/>
      {children}
    </div>
  );
}

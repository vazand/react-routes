import React from 'react'

function Header({title}) {
  return (
    <header className="text-lg  text-center bg-amber-700 text-white">
      <h1>{title}</h1>
    </header>
  );
}

export default Header
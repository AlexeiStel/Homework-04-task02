import React from 'react';
import { useToggle } from './useToggle';
import "./App.css";

function ToggleBooleanValueDemo() {
  const [isActive, toggleActive] = useToggle();

  return (
    <button onClick={() => toggleActive()}>
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

function ToggleValueDemo() {
  const [theme, toggleTheme] = useToggle(['light', 'dark']);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => toggleTheme()}>Toggle theme</button>
      <button onClick={() => toggleTheme('dark')}>Set to dark</button>
      <button onClick={() => toggleTheme('light')}>Set to light</button>
    </div>
  );
}
function ToggleColorBackgroundDemo() {
  const [color, toggleColor] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
  <button onClick={() => toggleColor()} style={{backgroundColor: color}}>
    Current color: {color}
  </button>
  )
}


function Demo() {

  return (
    <>
      <ToggleColorBackgroundDemo />
      <ToggleBooleanValueDemo />
      <ToggleValueDemo />
    </>
  );
}

export default Demo;
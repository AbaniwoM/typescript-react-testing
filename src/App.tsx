import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { Person } from './Person';
import { SideBar } from './SideBar';

function App() {
  return (
    <div className="App">
      <Person name={""} />
      <SideBar items={[]} />
      <Counter />
    </div>
  );
}

export default App;

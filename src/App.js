import './App.css';
import React from 'react';
import Child from './Child.js';
import { TransactionProvider } from './transContext';

function App() {
  return (
    <TransactionProvider>
      <Child />
    </TransactionProvider>
  );
}
export default App;

// import React from 'react';
// import logo from './logo.svg';
import {LayoutWithNavigationBar, Text} from 'md3-react'
import './App.css';
import { mdiHome } from '@mdi/js';

function App() {
  return (
    <LayoutWithNavigationBar segments={[{icon: mdiHome}]}>
      <Text>A</Text>
    </LayoutWithNavigationBar>
  );
}

export default App;

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';

function App() {
  
  return (
   
       <>
        <Navbar/>
        <Filter/>
        <Cards/>
      </>
  );
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Navbar from './components/Navbar';
import AutoCard from './components/AutoCard';
import WorkCard from './components/WorkCard';
import EducationCard from './components/EducationCard';
import HobbiesCard from './components/HobbiesCard';

function App() {
  const [isActive, setIsActive] = useState({
    active: true,
    name: 'education'
  });
  return (
        <>
        <Navbar />
       
      <div class="py-6">
        <main>
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <AutoCard  {...{isActive, setIsActive}}/>

            {
              isActive.name === "work" ? <WorkCard /> : isActive.name === "education" ?  <EducationCard /> : <HobbiesCard />
            }
          </div>
          
      </main>
      </div>
        </>
  );
}

export default App;

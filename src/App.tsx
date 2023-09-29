import React, { useState } from 'react';
import styles from './App.module.scss';
import Instructions from './components/organisms/Instructions/Instructions';
import Header from './components/organisms/Header/Header';

function App() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isNightModeTurnedOn, setIsNightModeTurnedOn] = useState(true);
  return (
    <div className={`${styles.main} ${isNightModeTurnedOn ? 'NIGHT' : 'DAY'}`}>
      <Header
        isNightModeTurnedOn={isNightModeTurnedOn}
        setIsNightModeTurnedOn={setIsNightModeTurnedOn}
      />
      <Instructions
        isOpen={isInstructionsModalOpen}
        onClose={() => { setIsInstructionsModalOpen(false); }}
        isNightModeTurnedOn={isNightModeTurnedOn}
      />
    </div>
  );
}

export default App;

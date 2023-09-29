import React, { useState } from 'react';
import styles from './App.module.scss';
import Instructions from './components/organisms/Instructions/Instructions';

function App() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(true);
  const [isNightModeTurnedOn, setIsNightModeTurnedOn] = useState(true);
  return (
    <div className={`${styles.App} ${isNightModeTurnedOn ? 'NIGHT' : 'DAY'}`}>
      <Instructions
        isOpen={isInstructionsModalOpen}
        onClose={() => { setIsInstructionsModalOpen(false); }}
        isNightModeTurnedOn={isNightModeTurnedOn}
      />
    </div>
  );
}

export default App;

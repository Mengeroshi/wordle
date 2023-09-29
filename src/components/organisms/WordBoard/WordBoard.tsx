import React from 'react';
import Word from '../../molecules/Word/Word';
import styles from './WordBoard.module.scss';

export default function WordBoard() {
  return (
    <div className={styles.main}>
      <Word word="gatos" wordToDiscover="gxxxx" />
      <Word word="gatos" wordToDiscover="gxxxx" />
      <Word word="gatos" wordToDiscover="gxxxx" />
      <Word word="gatos" wordToDiscover="gxxxx" />
      <Word word="gatos" wordToDiscover="gxxxx" />
    </div>
  );
}

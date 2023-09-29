import React from 'react';
import styles from './Word.module.scss';
import Letter from '../../atoms/Letter/Letter';
import { letterStatusAssignation } from '../../../utils';

export default function Word({ word, wordToDiscover }: { word: string, wordToDiscover: string }) {
  return (
    <div className={`${styles.main}`}>
      {word.split('').map((letter, index) => {
        const key = `${letter}-${index}`;
        return (
          <Letter
            letter={letter}
            status={letterStatusAssignation({ letter, index }, wordToDiscover)}
            key={key}
          />
        );
      })}
    </div>
  );
}

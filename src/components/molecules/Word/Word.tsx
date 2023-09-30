import React from 'react';
import styles from './Word.module.scss';
import Letter from '../../atoms/Letter/Letter';
import { letterStatusAssignation } from '../../../utils';

export default function Word(
  { word, wordToDiscover, editing }:
    { word: string, wordToDiscover: string | null, editing: boolean },
) {
  const span = word.length < 5 ? ('*').repeat(5 - word.length) : '';
  const currentWord = word + span;

  return (
    <div className={`${styles.main}`}>
      {currentWord.split('').map((letter, index) => {
        const key = `${letter}-${index}`;
        return (
          <Letter
            letter={letter}
            status={letterStatusAssignation({ letter, index }, wordToDiscover, editing)}
            key={key}
          />
        );
      })}
    </div>
  );
}

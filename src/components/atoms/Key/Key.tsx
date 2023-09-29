import React from 'react';
import styles from './Key.module.scss';
import { TLetterStatus } from '../../../types';

export default function Key({ letter, status }: { letter: string, status: TLetterStatus }) {
  return (
    <button type="button" className={`${styles.main} ${status}`}>
      {letter.toUpperCase()}
    </button>
  );
}

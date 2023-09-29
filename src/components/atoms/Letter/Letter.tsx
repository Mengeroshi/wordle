import React from 'react';
import styles from './Letter.module.scss';
import { TLetterStatus } from '../../../types';

export default function Letter({ letter, status }: { letter: string, status: TLetterStatus }) {
  return (
    <div className={`${styles.main} ${status}`}>
      {letter.toUpperCase()}
    </div>
  );
}

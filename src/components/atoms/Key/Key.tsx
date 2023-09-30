import React from 'react';
import styles from './Key.module.scss';
import { TLetterStatus, TOnclickButtonType } from '../../../types';

export default function Key(
  { letter, status, onClick }:
    { letter: string, status: TLetterStatus, onClick: TOnclickButtonType },
) {
  return (
    <button value={letter} onClick={onClick} type="button" className={`${styles.main} ${status}`}>
      {letter.toUpperCase()}
    </button>
  );
}

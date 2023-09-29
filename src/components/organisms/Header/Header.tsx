/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styles from './Header.module.scss';
import StatsIcon from '../../atoms/StatsIcon/StatsIcon';
import QuestionIcon from '../../atoms/QuestionIcon/QuestionIcon';

export default function Header(
  { isNightModeTurnedOn, setIsNightModeTurnedOn }:
    {
      isNightModeTurnedOn: boolean;
      setIsNightModeTurnedOn: React.Dispatch<React.SetStateAction<boolean>>;
    },
) {
  return (
    <header className={`${styles.main}`}>
      <div className={styles.wrap}>
        <QuestionIcon isNightModeTurnedOn={isNightModeTurnedOn} />
      </div>
      <h1>WORDLE</h1>
      <div className={styles.wrap}>
        <StatsIcon isNightModeTurnedOn={isNightModeTurnedOn} />
        <Toggle
          defaultChecked={!isNightModeTurnedOn}
          icons={false}
          onChange={() => { setIsNightModeTurnedOn((state) => !state); }}
          className={styles.toggle}
        />
      </div>
    </header>
  );
}

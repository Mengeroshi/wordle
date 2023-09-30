/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import styles from './Header.module.scss';
import StatsIcon from '../../atoms/StatsIcon/StatsIcon';
import QuestionIcon from '../../atoms/QuestionIcon/QuestionIcon';
import { useGetWordleContext } from '../../../context';

export default function Header() {
  const {
    wordleState: {
      isDayThemeTurnedOn,
    },
    modifiers: {
      toggleInstructionsModalState,
      toggleTheme,
      togleStatsModal,
    },
  } = useGetWordleContext();

  return (
    <header className={`${styles.main}`}>
      <div className={styles.wrap}>
        <QuestionIcon onClick={toggleInstructionsModalState} />
      </div>
      <h1>WORDLE</h1>
      <div className={styles.wrap2}>
        <StatsIcon onClick={togleStatsModal} />
        <Toggle
          defaultChecked={isDayThemeTurnedOn}
          icons={false}
          onChange={toggleTheme}
          className={styles.toggle}
        />
      </div>
    </header>
  );
}

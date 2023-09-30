/* eslint-disable import/no-extraneous-dependencies */
import React, { useMemo } from 'react';
import { useTimer } from 'react-timer-hook';
import Modal from '../../atoms/Modal/Modal';
import styles from './StatsModal.module.scss';
import { useGetWordleContext } from '../../../context';
import { onStartGame } from '../../../utils';

export default function StatsModal() {
  const {
    wordleState: {
      isDayThemeTurnedOn, isStatsModalOpen, stats, game: { alreadyPlayedWords, started },
    },
    modifiers: { togleStatsModal, startGame },
  } = useGetWordleContext();

  const timeStamp = useMemo(() => new Date(Date.now().valueOf() + 300000), [isStatsModalOpen]);
  // eslint-disable-next-line no-unused-vars
  const {
    seconds,
    minutes,
  } = useTimer({ expiryTimestamp: timeStamp });

  const onClickButton = () => {
    if (started) {
      togleStatsModal();
    }
    if (((minutes && seconds) === 0) && !started) {
      onStartGame(startGame, alreadyPlayedWords);
      togleStatsModal();
    }
  };
  return (
    <Modal isOpen={isStatsModalOpen}>
      <div className={`${styles.main} ${isDayThemeTurnedOn ? 'DAY' : 'NIGHT'}`}>
        <h3>Estadisticas</h3>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>{stats.length}</h3>
            <span>Jugadas</span>
          </div>
          <div className={styles.column}>
            <h3>{stats.filter((stat) => stat === 'WIN').length}</h3>
            <span>Victorias</span>
          </div>
        </div>
        <div className={styles.column}>
          {
            stats[stats.length - 1] === 'LOOSE' ? (
              <p>
                La palabra era
                {' '}
                <span>{alreadyPlayedWords}</span>
              </p>
            ) : null
          }

        </div>
        {started ? null : (
          <div className={styles.column}>
            <p>SIGUIENTE</p>
            <h4>
              {minutes}
              :
              {seconds}
            </h4>
          </div>
        )}
        <button type="button" onClick={onClickButton}>
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

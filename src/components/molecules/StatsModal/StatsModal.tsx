import React from 'react';
import Modal from '../../atoms/Modal/Modal';
import styles from './StatsModal.module.scss';
import { useGetWordleContext } from '../../../context';

export default function StatsModal() {
  const {
    wordleState: { isDayThemeTurnedOn, isStatsModalOpen },
    modifiers: { togleStatsModal },
  } = useGetWordleContext();

  const onClickButton = () => {
    togleStatsModal();
  };
  return (
    <Modal isOpen={isStatsModalOpen}>
      <div className={`${styles.main} ${isDayThemeTurnedOn ? 'DAY' : 'NIGHT'}`}>
        <h3>Estadisticas</h3>
        <div className={styles.row}>
          <div className={styles.column}>
            <h3>8</h3>
            <span>Jugadas</span>
          </div>
          <div className={styles.column}>
            <h3>8</h3>
            <span>Victorias</span>
          </div>
        </div>
        <div className={styles.column}>
          <p>
            La palabra era
            {' '}
            <span>PERRO</span>
          </p>

        </div>
        <div className={styles.column}>
          <p>SIGUIENTE</p>
          <h4>4:10</h4>
        </div>
        <button type="button" onClick={onClickButton}>
          Aceptar
        </button>
      </div>
    </Modal>
  );
}

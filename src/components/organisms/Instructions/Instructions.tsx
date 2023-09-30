import React from 'react';
import Modal from '../../atoms/Modal/Modal';
import Word from '../../molecules/Word/Word';
import styles from './Instructions.module.scss';
import { useGetWordleContext } from '../../../context';

export default function Instructions(
  {
    isOpen,
    onClose,
  }: {
    isOpen: boolean;
    onClose: () => void;
  },
) {
  const { wordleState: { isDayThemeTurnedOn } } = useGetWordleContext();
  return (
    <Modal isOpen={isOpen}>
      <div className={`${styles.main} ${isDayThemeTurnedOn ? 'DAY' : 'NIGHT'}`}>
        <h1>Como jugar</h1>
        <p className={styles.firstPg}>
          Adivina la palabra oculta en cinco intentos.
        </p>
        <p>Cada intento debe ser una palabra válida de 5 letras.</p>
        <p>
          Después de cada intento el color de las letras cambia para mostrar
          qué tan cerca estás de acertar la palabra.

        </p>
        <h2>Ejemplos</h2>
        <div className={styles.wordDesc}>
          <Word word="gatos" wordToDiscover="gxxxx" />
          <p>
            La letra
            <span> G </span>
            está en la palabra y en la posición correcta.
          </p>
        </div>
        <div className={styles.wordDesc}>
          <Word word="vocal" wordToDiscover="xxxxc" />
          <p>
            La letra
            <span> C </span>
            está en la palabra pero en la posición incorrecta.
          </p>
        </div>
        <div className={styles.wordDesc}>
          <Word word="canto" wordToDiscover="xxxxx" />
          <p>
            La letra
            <span> O </span>
            no está en la palabra.
          </p>
        </div>
        <p className={styles.penultimate}>
          Puede haber letras repetidas.
          Las pistas son independientes para cada letra.
        </p>
        <p className={styles.last}>¡Una palabra nueva cada 5 minutos!</p>
        <button type="button" onClick={onClose}>!JUGAR¡</button>
      </div>
    </Modal>
  );
}

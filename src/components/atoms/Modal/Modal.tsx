import React from 'react';
import ReactDOM from 'react-dom';
import useBlurOnOpenModal from '../../../hooks/useBlurOnOpenModal';
import styles from './Modal.module.scss';

const modalContainer = document.querySelector('#modal-root') as HTMLDivElement;

export default function Modal(
  { children, isOpen }: { children: React.ReactNode, isOpen: boolean },
) {
  useBlurOnOpenModal(isOpen);
  if (isOpen) {
    return ReactDOM.createPortal(
      <div className={styles.backdrop}>
        <div className={styles.main}>
          {children}
        </div>
      </div>,
      modalContainer,
    );
  }

  return null;
}

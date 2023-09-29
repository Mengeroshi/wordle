import React from 'react';
import styles from './ActionKey.module.scss';

export default function ActionKey(
  { children, onClick }: { children: React.ReactNode | string, onClick: () => void },
) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.main}
    >
      {typeof children === 'string' ? children.toUpperCase() : children}
    </button>
  );
}

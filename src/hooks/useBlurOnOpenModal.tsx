import { useEffect } from 'react';

export default function useBlurOnOpenModal(openModal: boolean) {
  useEffect(() => {
    const root = document.querySelector('#root') as HTMLDivElement;
    if (openModal) {
      root.style.filter = 'blur(4px)';
      root.style.transition = 'filter .3s cubic-bezier(.86,0,.07,1)';
    } else {
      root.style.filter = 'blur(0px)';
      setTimeout(() => {
        root.style.filter = '';
      }, 0);
    }

    return () => {
      root.style.filter = '';
    };
  }, [openModal]);
}

'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useRef, useEffect } from 'react';

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const overlay = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      ref={overlay}
      onClick={onDismiss}
      onKeyDown={(event) => {
        if (event.key === 'Escape') onDismiss();
      }}
    >
      <div className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-6 sm:w-10/12 md:w-8/12 lg:w-1/2'>
        {children}
      </div>
    </div>
  );
};

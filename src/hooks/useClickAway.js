import { useEffect, useRef } from 'react';


export function useClickAway(callback) {
  const ref = useRef();

  function handleClickOutside(event) {
    if (!ref.current?.contains(event.target)) {
      if (
        !document.body.contains(event.target)
      ) {
        return;
      }

      callback(event);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref };
}

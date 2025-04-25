import { useEffect } from 'react';
import Konami from '../assets/js/konami';

const EasterEgg = ({ setActive }) => {
  useEffect(() => {
    const konami = new Konami(() => {
      setActive(true);
      setTimeout(() => setActive(false), 10000); // 10 seconds of fun
    });

    return () => konami.disable();
  }, [setActive]);

  return null;
};

export default EasterEgg;
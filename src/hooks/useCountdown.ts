import { useState, useEffect } from "react";

const useCountdown = (initialCount: number, shouldStart: boolean, callback: () => void) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setCount(initialCount);
  }, [initialCount]);

  useEffect(() => {
    if (!shouldStart) return;

    if (count === 0) {
      callback();
      return;
    }

    const timerId = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [count, callback, shouldStart]);

  return [count];
};

export default useCountdown;

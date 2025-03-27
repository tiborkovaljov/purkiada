import { useState, useEffect } from 'react';

const Account = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [timerEnded, setTimerEnded] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setTimerEnded(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="relative h-full w-full flex-1 flex flex-col justify-center items-center p-10">
      <h1>Aktuální rok</h1>
    </div>
  );
};

export default Account;

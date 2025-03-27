import { useState, useEffect } from 'react';

const CurrentYear = () => {
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
      <h1 className="text-4xl font-bold md:text-6xl text-center text-[#5480a9] pt-10">
        Aktuální rok
      </h1>
      <div>
        asd 
      </div>
      <div className="relative h-full w-full flex-1 flex flex-col justify-center items-center p-10">
        <div
          id="timer"
          className={`text-6xl font-bold ${
            timerEnded ? 'text-gray-500' : 'text-green-500'
          }`}
          style={{ fontSize: '5rem' }}
        >
          {timeLeft}s
        </div>

        {timerEnded && (
          <a
            href="https://yourlink.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-5 px-8 py-4 bg-green-500 text-white rounded-lg shadow-lg">
              Vstoupit do soutěže
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CurrentYear;

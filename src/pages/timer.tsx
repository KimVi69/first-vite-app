import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(false);

  const handleSubmit = () => {
    setCountdown(true);
  };

  useEffect(() => {
    if (time > 0 && countdown) {
      const interval = setInterval(() => {
        console.log(time);
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, countdown]);

  return (
    <main className="flex justify-center items-center">
      <section className="flex flex-col border-4 w-[400px] h-[400px] justify-center items-center p-20 rounded-[50%] gap-8">
        <h1>COUNTDOWN TIMER:</h1>
        <input
          className="text-9xl text-center w-full outline-none"
          value={time}
          type="text"
          onChange={(e) => setTime(parseInt(e.target.value))}
        />
        <button
          className="bg-black rounded-lg text-white px-6 py-2 text-base"
          onClick={handleSubmit}
        >
          START
        </button>
      </section>
    </main>
  );
};

export default Timer;

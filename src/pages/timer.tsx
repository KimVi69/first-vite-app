import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(10);
  const [countdown, setCountdown] = useState(false);
  const [timeInput, setTimeInput] = useState(true);

  const handleSubmit = () => {
    if (!countdown) {
      setCountdown(true);
      setTimeInput(false);
    }
  };

  useEffect(() => {
    if (time > 0 && countdown) {
      const interval = setInterval(() => {
        console.log(time);
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (time <= 0) {
      setCountdown(false);
      setTimeInput(true);
    }
  }, [time, countdown]);

  return (
    <main className="flex justify-center items-center">
      <section className="flex flex-col border-4 w-[400px] h-[400px] justify-center items-center p-20 rounded-[50%] gap-8">
        <h1>COUNTDOWN TIMER:</h1>
        <input
          className="text-9xl text-center w-full outline-none bg-transparent"
          value={time}
          type="text"
          maxLength={3}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setTime(isNaN(value) ? 0 : value);
          }}
          disabled={!timeInput}
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

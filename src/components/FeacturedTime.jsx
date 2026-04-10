import React, { useEffect, useState } from "react";

const FeaturedTime = () => {
    const [time, setTime] = useState({
  hours: 0,
  minutes: 0,
  seconds: 0
});

useEffect(() => {
  const timer = setInterval(() => {
    setTime((prev) => {
      let { hours, minutes, seconds } = prev;

      if (hours === 59 && minutes === 59 && seconds === 59) {
        clearInterval(timer);
        return prev;
      }

      seconds++;

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      return { hours, minutes, seconds };
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);


  return (
    <div className="h-38 bg-black/20 backdrop-blur-md rounded-2xl px-10 py-3 text-white shadow-xl">
      <p className="text-sm mb-3 font-roboto text-gray-200">Auction ends in:</p>

      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <h1 className="flex items-center text-5xl font-bold gap-3.5">
            {time.hours}
        <span className="text-4xl font-bold">:</span>
          </h1>
          <p className="text-sm text-gray-300 mt-2 mr-4">Hours</p>
        </div>


        <div className="text-center">
          <h1 className="flex items-center text-5xl font-bold gap-3.5">
            {time.minutes}
            <span className="text-4xl font-bold">:</span>
          </h1>
          <p className="text-sm text-gray-300 mt-2 mr-4">Minutes</p>
        </div>

        

        <div className="text-center">
          <h1 className="text-5xl font-bold">
            {time.seconds}
          </h1>
          <p className="text-sm text-gray-300 mt-2 ml-2.5">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTime;

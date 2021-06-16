import React, { useState, useEffect } from "react";
import Box from "./Box";

function Counter() {
  const future = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);

  const countdownDate = new Date(future.toLocaleDateString("en-US")).getTime();
  const [date, setDate] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      if (countdownDate) {
        const currentTime = new Date().getTime();

        const difference = countdownDate - currentTime;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
          hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
          minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
          seconds = `0${seconds}`;
        }

        setDate({ days: days, hours: hours, minutes, seconds });
      }
    }, 1000);
  }, [countdownDate]);

  return (
    <div className="countdown-container">
      <Box number={date.days} text="DAYS" />
      <Box number={date.hours} text="HOURS" />
      <Box number={date.minutes} text="MINUTES" />
      <Box number={date.seconds} text="SECONDS" />
    </div>
  );
}

export default Counter;

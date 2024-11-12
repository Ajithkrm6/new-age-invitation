import React, { useEffect, useState } from "react";

export interface DaysCounterProps {
  targetDate: string;
}

export const DaysCounter = ({ targetDate }: DaysCounterProps) => {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Ensure the target date is in ISO format (YYYY-MM-DD)
    const [month, date, year] = targetDate.split("-");
    const formatedDate = new Date(`${year}-${month}-${date}`).getTime(); // Use YYYY-MM-DD format

    // Check if the formatted date is valid
    if (isNaN(formatedDate)) {
      console.error("Invalid date format:", targetDate);
      return; // Exit if the date is invalid
    }

    const IntervalId = setInterval(() => {
      const currentDate = new Date().getTime();
      const difference = formatedDate - currentDate;

      if (difference <= 0) {
        clearInterval(IntervalId);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(IntervalId);
  }, [targetDate]);

  return (
    <div className="flex w-full md:w-[70%] justify-between items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-jostSemiBold text-px-24 text-textgreen">
          {remainingTime.days}
        </h1>
        <h1 className="font-jostSemiBold text-textgreen">Days</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-jostSemiBold text-px-24 text-textgreen">
          {remainingTime.hours}
        </h1>
        <h1 className="font-jostSemiBold text-textgreen">Hours</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-jostSemiBold text-px-24 text-textgreen">
          {remainingTime.minutes}
        </h1>
        <h1 className="font-jostSemiBold text-textgreen">Minutes</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-jostSemiBold text-px-24 text-textgreen">
          {remainingTime.seconds}
        </h1>
        <h1 className="font-jostSemiBold text-textgreen">Seconds</h1>
      </div>
    </div>
  );
};

import { useState } from "react";
import { ButtonAddTimer } from "./ButtonAddTimer";
import { InputTime } from "./InputTime";

export const TimerForm = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("01");
  const [seconds, setSeconds] = useState("00");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(
      "hours : ",
      hours,
      "minutes : ",
      minutes,
      "secondes : ",
      seconds
    );
  };

  return (
    <>
      <div className="flex items-center justify-between ">
        <span className="flex-1 text-center text-neutral-content">hr</span>
        <span className="flex-1 text-center text-neutral-content">min</span>
        <span className="flex-1 text-center text-neutral-content">sec</span>
      </div>
      <div className="flex items-center rounded-md border border-neutral bg-base-200 p-2">
        <InputTime
          value={hours}
          name="hrs"
          onChange={(e) => {
            setHours(e.target.value);
          }}
        ></InputTime>
        <span className="text-lg">:</span>
        <InputTime
          value={minutes}
          name="mins"
          onChange={(e) => {
            setMinutes(e.target.value);
          }}
        ></InputTime>
        <span className="text-lg">:</span>
        <InputTime
          value={seconds}
          name="secs"
          onChange={(e) => {
            setSeconds(e.target.value);
          }}
        ></InputTime>
      </div>
      <ButtonAddTimer onClick={handleClick} />
    </>
  );
};

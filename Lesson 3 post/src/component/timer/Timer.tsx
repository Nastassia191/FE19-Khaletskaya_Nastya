import React, { useEffect, useState } from "react";

const getTime = () => (new Date()).toTimeString().substring(0, 8); // берет время в минутах и сикундах и записывант в строку
//const getTime = () => Date.now().toString(); //,берет время начиная с какогото года

const Timer: React.FC = () => {



  const [time, setTime] = useState("");

  useEffect(() => {

    let intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId); // очистка интервала
    }
  }, []);
  ;

  return (
    <div>
      Time: {time}
    </div>
  )
}

export default Timer;
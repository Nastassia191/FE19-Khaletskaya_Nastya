import React, { useEffect, useState } from "react";

const Clicker: React.FC = () => {
  const PI = 3.14;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    // console.log(count, count2, PI);
  }, [count, count2]);

  const increment = () => {
    setCount2((prevCount) => prevCount + 1);
  }

  const decriment = () => {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <button onClick={decriment}>
        -
      </button>
      <span>
        {count}
      </span>
      <span>
        '  '
      </span>
      <span>
        {count2}
      </span>
      <button onClick={increment}>
        +
      </button>
    </div>
  )
}

export default Clicker;
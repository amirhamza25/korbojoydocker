import React, { useState } from "react";

function p() {
  const [count, setCount] = useState(0);
  const AddCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      {count}
      <button onClick={AddCount}>Add</button>
    </div>
  );
}

export default p;

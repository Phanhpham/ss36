
import React, { useState, useEffect } from 'react';

export default function B1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Giá trị của Count: ${count}`;
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Ứng dụng React của tôi</h1>
      <p>Giá trị của Count: {count}</p>
      <button onClick={handleClick}>Tăng Count lên 1</button>
    </div>
  );
}


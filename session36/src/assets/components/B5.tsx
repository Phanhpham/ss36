import React, { useState, useEffect } from 'react';

export default function B5() {
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    });

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Thoi gian hien tai</h1>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}


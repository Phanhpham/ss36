import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <div>
      <h1>Ô input sẽ được focus khi component được render</h1>
      <input type="text" placeholder="focus me" ref={inputRef} />
    </div>
  );
}

export default MyComponent;
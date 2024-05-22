import React, { useEffect, useState } from "react";

export default function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("Phuong Anh");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickName = () => {
    setName(`Phu`);
  };
  // useEffect(() => {
  //   console.log("useEffect dc goi!");
  // });

  // useEffect có 3 trường hợp

  // Trường hợp 1: useEffect chỉ có callback

  // useEffect(()=>{})
  // Tính chất:
  // + luôn được gọi khi component render
  // + Gọi lại callback mỗi khi component re-render

  // Trường hợp 2: useEffect có deps là []
  // useEffect(()=>{},[])

  // Tính chất:
  // + luôn được gọi khi component render
  // + Chỉ gọi 1 lần khi component mount

  // Trường hợp 3: useEffect có deps và giá trị truyền vào
  // useEffect(()=>{},[state])

  // Tính chất:
  // + luôn được gọi khi component render
  // + Sẽ gọi lại callback khi deps thay đổi

  // useEffect(() => {
  //   console.log("useEffect trường hợp 1");
  // });

  // useEffect(() => {
  //   console.log("useEffect trường hợp 2");
  // }, []);

  useEffect(() => {
    console.log("useEffect trường hợp 3");
  }, [count]);

  // dependencies - Phụ thuộc

  return (
    <div>
      UseEffect
      {/**
       * UseEffect:la 1 hook sinh ra de lmj?
       * cu phap ntn ?
       * cach dunh ntn?
       */}
      <p>gia tri bien count :{count}</p>
      <p>Tên eiu: {name}</p>
      <button onClick={handleClick}>click number</button>
      <button onClick={handleClickName}>click name</button>
    </div>
  );
}

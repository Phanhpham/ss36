import React,{useState} from 'react'

export default function B7() {
  const [count,setCount] = useState<number>(0);
  const [preCountRef,setpreCountRef]=useState<number>();
  const handleClick =()=>{
    setCount(count+1);
    setpreCountRef(count);
  };
  
  return (
    <div>B7
      <p>gia tri trc :{preCountRef}</p>
      <p>gia tri hien tai:{count}</p>
      <button onClick ={handleClick}>Tang</button>
    </div>
  );
}

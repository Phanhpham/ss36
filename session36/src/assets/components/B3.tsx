import {useState} from 'react'
const [btns,setBtns]=useState<string[]>([
    "trang chủ",
    " sản pham",
    "gioi thieu",
    "liên he",
]);
const [color,setColor]=useState<string[]>(["","","",""])
export default function B3() {
   const handleClick=(a:any)=>{
    for (let i = 0;i<color.length;i++){
        if(i===a){
            color[i]="red";
            setColor([...color]);
        }else{
            color[i]="";
            setColor([...color]);
        }
    }
   };
  return (
    <div>B3
 {btns.map((item,index)=>(
    <button
    style ={{background:color[index]}}
        onClick={()=> handleClick(index)}
        >{item}
    </button>
    ))}
    </div>
  )
}

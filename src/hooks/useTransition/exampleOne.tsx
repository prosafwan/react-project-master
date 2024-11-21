import {useState, useTransition } from "react";

const ExampleOne = () => {
  const [inputValue , setValue] = useState();
  const [arr , setArr] = useState<any>([]);
  const [isLoading, startTransition] = useTransition();

  const submitHandler = (e:any)=>{
    setValue(e.target.value);
    startTransition(()=>{
      const list = [];
      for(let i=0; i <50; i++) {
        console.log(i);
        list.push(e.target.value);
      }
      setArr(list)
    })
 }

  return (
    <div>
      <input type="text" className="border-solid" onChange={submitHandler} value={inputValue} />
      {isLoading ? <p>Loading...</p> : arr?.map((value:any, index:any) => <p key={value + index}>{value}</p>)}
    </div>
  )
}

export default ExampleOne

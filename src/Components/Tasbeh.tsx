import { useEffect, useState } from "react";
import touch from "../assets/touch-screen.png";
import Refresh from "../assets/refresh";
import Ong from "../assets/ong";
import { Link } from "react-router";

function Tasbeh() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (count === 33) {
      setCount(0);
    }
  }, [count]);

  const percent = (count / 33) * 100;

  return (
    <div className="flex flex-col items-center  space-y-6">
      <div className="w-full bg-[#002547] p-4">
     <Link to={"/"}>
     <Ong/>

     </Link>
        <div
          className="w-[200px] ml-38 h-[200px] rounded-full flex items-center justify-center cursor-pointer border-y border-[#002547]"
          style={{
            background: `conic-gradient(#00ffcc ${percent}%, #002547 ${percent}%)`,
            transition: "background 0.3s ease-in-out",
          }}
        >
          <div className="w-[185px] h-[185px] rounded-full bg-[#002547] flex flex-col items-center justify-center">
            <p className="text-white text-5xl font-bold">{count}/33</p>
          </div>
        </div>

      <div className="flex justify-between">
      <p  className="text-white text-lg mt-2 font-bold ">Jami: {total}</p>
      <div onClick={()=>{
        setCount(0)
        setTotal(0)
      }}>
        <Refresh/>
        
      </div>
      </div>
      </div>

      <div
        className="p-4 border-1 border-[#002547] mt-20 rounded-full transform e  active:bg-[#0025477c] hover:border-1 active:border-transparent"
        onClick={() => {
          setCount(count + 1);
          setTotal(total + 1);
        }}
      >
        <img className="object-cover w-[100px] h-[100px]" src={touch} alt="" />
      </div>
    </div>
  );
}

export default Tasbeh;

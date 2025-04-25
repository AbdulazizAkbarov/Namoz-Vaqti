import "./App.css";


import Banner from "./Components/Banner";

import check from "./assets/check.png";
import checked from "./assets/checked.png";
import KunlikDuolar from "./Components/KunlikDuolar";
import { useEffect, useState } from "react";
import axios from "axios";
import NamozVaqtlari from "./Components/NamozVaqtlari";
import Funksiyalar from "./Components/Funksiyalar";

type Time ={
  
  region: string,
  date: Date,
  weekday: string,
  hijri_date: {
    month: string,
    day: number
  },
  times: {
    tong_saharlik: string,
    quyosh: string,
    peshin: string,
    asr: string,
    shom_iftor: string,
    hufton: string
  }
}

function App() {
  const [time, setTime] = useState<Time>( );
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get("https://islomapi.uz/api/present/day?region=Toshkent")
      .then((res) => {
        setTime(res.data);
        setIsLoading(false)
        console.log(res.data);
      }).catch((e) => {
        console.log(e);
        setIsLoading(false)
      })
  }, []);
  const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

   
  
  return (
    <div className="main mx-auto relative ">
      <div className="flex px-3 justify-between py-10">
        <div className="text-white">
          <h2 className="font-bold text-lg">{time?.region}</h2>
          <h2 className="font-bold text-3xl">{time?.hijri_date.month}</h2>
        </div>
        <img
          className="rounded-full w-12 h-12"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYN4scLAOk6JcRBGzBZrq9N4zSHo6oOB_aycIUGb6FlF48fK8XsTr1a6AJZgMuYrduBeY&usqp=CAU"
          }
          alt=""
        />
      </div>

      <h2 className="flex justify-center text-6xl font-bold text-white">
        {timeString}
      </h2>

          {
            isLoading ? <p>loading...</p> :
            (
              <div className="bg-white absolute top-[80%] left-0 right-0 bottom-0 h-[100vh] rounded-t-4xl">
                
        <NamozVaqtlari/>
                  
        
              <Funksiyalar/>
        
                <Banner />
        
                <div className="bg-[#faf7f7] mx-2 h-auto rounded-lg  p-2">
                  <h2 className="font-bold text-xl pl-3">Prayer Tracker</h2>
        
                  <div className="bg-white  rounded-xl p-1 my-1">
                    <div className="grid grid-cols-5 mt-2">
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={checked} alt="" />
                        </div>
                        <p className="pt-1">Bomdod</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={checked} alt="" />
                        </div>
                        <p className="pt-1">Peshin</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={check} alt="" />
                        </div>
                        <p className="pt-1">Asr</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={check} alt="" />
                        </div>
                        <p className="pt-1">Shom</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={check} alt="" />
                        </div>
                        <p className="pt-1">Hufton</p>
                      </div>
                    </div>
                  </div>
                </div>
                <KunlikDuolar />
              </div>
            )
          }
    </div>
  );
}

export default App;

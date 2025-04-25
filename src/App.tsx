import "./App.css";
import fajr from "./assets/fajr.png";
import duhr from "./assets/duhr.png";
import asr from "./assets/asr.png";
import isya from "./assets/isya.png";
import magrib from "./assets/magrib.png";
import quran from "./assets/quran.png";
import hijri from "./assets/calendar.png";
import qibla from "./assets/qibla-compass.png";
import tasbeh from "./assets/beads.png";
import calendar from "./assets/calendar (1).png";
import dua from "./assets/dua-hands.png";
import hadith from "./assets/bismillah.png";
import salah from "./assets/salah.png";
import Banner from "./Components/Banner";

import check from "./assets/check.png";
import checked from "./assets/checked.png";
import KunlikDuolar from "./Components/KunlikDuolar";
import { useEffect, useState } from "react";
import axios from "axios";

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

// import tahajjud from "./assets/tahajjud.png";

function App() {
  const [time, setTime] = useState<Time | null>( null);
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
                  {/* {time?.map((i)=>{ */}
                    {/* return( */}
                      <div className="flex px-2 justify-between pt-3 mt-3">
                      <div className="flex flex-col items-center">
                        <h2 className="font-bold">Bomdod</h2>
                        <img className="w-15 h-15 rounded-full" src={fajr} alt="" />
                        <h2>{time?.times.peshin}</h2>
                      </div>
            
                      <div className="flex flex-col items-center">
                        <h2 className="font-bold">Peshin</h2>
                        <img className="w-15 h-15 rounded-full" src={duhr} alt="" />
                        <h2>{time?.times.peshin}</h2>
                      </div>
            
                      <div className="flex flex-col items-center">
                        <h2 className="font-bold">Asr</h2>
                        <img className="w-15 h-15 rounded-full" src={asr} alt="" />
                        <h2>{time?.times.asr}</h2>
                      </div>
            
                      <div className="flex flex-col items-center">
                        <h2 className="font-bold">Shom</h2>
                        <img className="w-15 h-15 rounded-full" src={magrib} alt="" />
                        <h2>{time?.times.shom_iftor}</h2>
                      </div>
            
                      <div className="flex flex-col items-center">
                        <h2 className="font-bold">Hufton</h2>
                        <img className="w-15 h-15 rounded-full" src={isya} alt="" />
                        <h2>{time?.times.hufton}</h2>
                      </div>
            
                
                    </div>
                    {/* )
                  })} */}
        
                <div className="px-3 grid grid-cols-4 gap-1 mt-3">
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={quran} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Quran</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={hijri} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Hijri</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={qibla} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Qibla</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={tasbeh} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Tasbeeh</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={calendar} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Calendar</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={dua} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Dua</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={hadith} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Hadith</h2>
                  </div>
        
                  <div className="flex flex-col items-center pt-2">
                    <div className="bg-[#E9F4EE] p-3 rounded-lg inline-block">
                      <div className="w-[32px] h-[32px]">
                        <img className="w-[100%] h-[100%]" src={salah} alt="" />
                      </div>
                    </div>
                    <h2 className="font-bold">Salah</h2>
                  </div>
                </div>
        
                <Banner />
        
                <div className="bg-[#faf7f7] mx-2 h-auto rounded-lg  p-2">
                  <h2 className="font-bold text-xl pl-3">Prayer Tracker</h2>
        
                  <div className="bg-white  rounded-xl p-1 my-1">
                    <div className="grid grid-cols-5 mt-2">
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={checked} alt="" />
                        </div>
                        <p className="pt-1">Fajr</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={checked} alt="" />
                        </div>
                        <p className="pt-1">Duhur</p>
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
                        <p className="pt-1">Magrib</p>
                      </div>
        
                      <div className="flex flex-col items-center">
                        <div className="w-[20px] h-[20px]">
                          <img className="wpfull h-full " src={check} alt="" />
                        </div>
                        <p className="pt-1">Isya</p>
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

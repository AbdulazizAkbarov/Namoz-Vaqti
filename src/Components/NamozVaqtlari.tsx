import axios from 'axios';
import React, { useEffect, useState } from 'react'
import fajr from "../assets/fajr.png";
import duhr from "../assets/duhr.png";
import asr from "../assets/asr.png";
import isya from "../assets/isya.png";
import magrib from "../assets/magrib.png";
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
function NamozVaqtlari() {
    const [time, setTime] = useState<Time | null>( null);
  
    useEffect(() => {
      axios
        .get("https://islomapi.uz/api/present/day?region=Toshkent")
        .then((res) => {
          setTime(res.data);
          console.log(res.data);
        }).catch((e) => {
          console.log(e);
        })
    }, []);
  
  return (
    <div className="flex px-6 justify-between pt-3 mt-3">
                        
    <div className="flex flex-col items-center">
      <h2 className="font-bold">Bomdod</h2>
      <img className="w-15 h-15 rounded-full" src={fajr} alt="" />
      <h2 className='text-[#002547]'>{time?.times.quyosh}</h2>
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

  )
}

export default NamozVaqtlari
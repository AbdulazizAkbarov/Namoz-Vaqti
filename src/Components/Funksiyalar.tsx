import quran from "../assets/quran.png"
import hijri from "../assets/calendar .png";
import qibla from "../assets/qibla-compass .png";
import tasbeh from "../assets/beads.png";
import calendar from "../assets/calendar 1.png";
import dua from "../assets/dua-hands .png";
import hadith from "../assets/bismillah .png"
import salah from "../assets/salah .png";
import { Link } from "react-router";
function Funksiyalar() {
  return (
    
    <div className="px-3 grid grid-cols-4 gap-1 mt-3">
    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={quran} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Quran</h2>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={hijri} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Hijri</h2>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={qibla} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Qibla</h2>
    </div>

  <Link to={"/tasbeh"}>
  
  
  <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={tasbeh} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Tasbeeh</h2>
    </div>

  </Link>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={calendar} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Calendar</h2>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={dua} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Dua</h2>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={hadith} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Hadith</h2>
    </div>

    <div className="flex flex-col items-center pt-2">
      <div className="border-1 border-[#002547] p-3 rounded-lg inline-block">
        <div className="w-[32px] h-[32px]">
          <img className="w-[100%] h-[100%]" src={salah} alt="" />
        </div>
      </div>
      <h2 className="font-bold">Salah</h2>
    </div>
  </div>
  )
}

export default Funksiyalar
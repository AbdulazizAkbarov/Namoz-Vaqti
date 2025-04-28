import { useState } from "react";
import { Link, useParams } from "react-router";
import Ong from "../assets/ong";
import quran from "./data";

function QuranText() {
  const { id } = useParams();

  
  const [ayat, _] = useState(
    quran.filter((val) => val.number == Number(id))[0]
  );
  
  return (
    <div>
      <div className="bg-[#002547] text-white p-3 flex items-center">
        <Link to="/quron">
          <Ong />
        </Link>
        <p className="text-center ml-30 font-bold">{ayat.englishName}</p>
      </div>

      {ayat.ayahs.map((val: any, index) => (
        <div>
            <div className="p-3 text-right  flex justify-between gap-3 items-center" key={val.number}>
            <div>{index + 1}</div>
          <p className="mt-2">{val.text}</p>
        </div>

        <div className="w-full h-[1px] bg-[lightgrey] "></div>
        
        </div>
      ))}
    </div>
  );
}

export default QuranText;

import {  useState } from "react";
import data from "./data"
import { Link } from "react-router";

function Quron() {
  const [quran, _] = useState(data);

  return (
    <div>
      <div className="bg-[#002547] w-full h-16 text-white ">
        <p className="text-center pt-3 font-bold text-xl">Qur'oni Karim</p>
      </div>
      <div>
        {quran.map((val: any) => {
          return (
              <Link to={`/quron/${val.number}`} key={val.number}>
                <div>
                  <div className="flex justify-between items-center px-3 borde-b-1">
                    <div className=" flex mt-3 items-center gap-5">
                      <p className=" text-2xl">{val.number}. </p>
                      <div className="flex-col">
                        <p className="font-bold">{val.englishName}</p>
                        <p className="text-xs">{val.ayahs.length} Oyatdan iborat</p>
                      </div>
                    </div>

                    <p>{val.name}</p>
                  </div>
                  <div className="w-full h-[1px] px-3 bg-[lightgrey]"></div>
                </div>
              </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Quron;

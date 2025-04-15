import "./App.css";
import fajr from "./assets/fajr.png";
import duhr from "./assets/duhr.png";
import asr from "./assets/asr.png";
import isya from "./assets/isya.png";
import magrib from "./assets/magrib.png";
// import tahajjud from "./assets/tahajjud.png";


function App() {
  return (
    <div className="main mx-auto relative ">
      <div className="flex px-3 justify-between py-10">
        <div className="text-white">
          <h2 className="font-bold text-lg">Asslomu aleykum</h2>
          <h2 className="font-bold text-3xl">User Name</h2>
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
        13:13
      </h2>

      <div className="bg-white absolute top-[80%] left-0 right-0 bottom-0 h-[100vh] rounded-t-4xl">
       <div className="flex px-2 justify-between pt-3">

       <div className="flex flex-col items-center">
          <h2 className="font-bold">Fajr</h2>
          <img className="w-15 h-15 rounded-full" src={fajr} alt="" />
          <h2>05:05</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold">Duhur</h2>
          <img className="w-15 h-15 rounded-full" src={duhr} alt="" />
          <h2>05:05</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold">Asr</h2>
          <img className="w-15 h-15 rounded-full" src={asr} alt="" />
          <h2>05:05</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold">Magrib</h2>
          <img className="w-15 h-15 rounded-full" src={magrib} alt="" />
          <h2>05:05</h2>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-bold">Isya</h2>
          <img className="w-15 h-15 rounded-full" src={isya} alt="" />
          <h2>05:05</h2>
        </div>

        {/* <div>
          <h2>Tahajjud</h2>
          <img className="w-15 h-15 rounded-full" src={tahajjud} alt="" />
          <h2>05:05</h2>
        </div> */}
       </div>
      </div>
    </div>
  );
}

export default App;

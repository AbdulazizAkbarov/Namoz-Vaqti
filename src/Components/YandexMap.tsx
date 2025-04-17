import { Map, Placemark, YMaps } from "@iminside/react-yandex-maps";
import React, { useState } from "react";

function YandexMap() {
  const [langlot, setLangLot] = useState<{
    lang: number;
    lat: number;
  }>();
  
  const defaultState = {
    center: langlot ?[langlot.lat,langlot.lang]:[41,69],
    zoom: 12,
  };
  return (
    <div>
      <button
        className="border p-2 cursor-pointer"
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (data) => {
              setLangLot({
                lang: data.coords.longitude,
                lat: data.coords.latitude,
              });
            },
            (e) => {
              console.log(e);
            }
          );
        }}
      >
        Mani top
      </button>

      <YMaps>
        <Map
          style={{
            width: "100%",
            height: "400px",
          }}
          state={defaultState}
        >
            {
                langlot&&(
          <Placemark geometry={[langlot.lat,langlot.lang]} />

                )
            }
        </Map>
      </YMaps>
    </div>
  );
}

export default YandexMap;

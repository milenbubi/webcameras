import { useMemo, useState } from "react";
import Title from "../Components/Title";
import FSButton from "../Components/FSButton";
import LSToggler from "../Components/LSToggler";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import ImagePlayer from "../Components/players/ImagePlayer";
import ChangeCamButton from "../Components/ChangeCamButton";

//  https://www.canlimobeseizle.com/wp-content/uploads/custom-images/resim1.jpg?
// Капъкуле - от 1 до 4. "?" е задължителен, за да има актуално време

// https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle/
// Камери от всички турски ГКПП

const getLesovoSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "6";
    case 2: return "5";
    case 3: return "12";
    default: return "6";
  }
};

const getMTSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "11";
    case 2: return "13";
    default: return "13";
  }
};

const getCPSource = (streamIndex: number) => {
  switch (streamIndex) {
    case 1: return "8";
    case 2: return "7";
    default: return "8";
  }
};


function Turkiye() {
  const [streamKA, setStreamKA] = useState(1);
  const [streamLesovo, setStreamLesovo] = useState(1);
  const [streamМТ, setStreamMT] = useState(1);
  const [streamCP, setStreamCP] = useState(1);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("kpkl");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("lesv");
  const { isBooleanLSOn: isOn3, toggleBooleanLS: toggleIsOn3 } = useBooleanLS("mtnv");
  const { isBooleanLSOn: isOn4, toggleBooleanLS: toggleIsOn4 } = useBooleanLS("chpk");

  // Cache date index
  const date1 = useMemo(() => Date.now(), [streamKA, isOn1]);
  const date2 = useMemo(() => Date.now(), [streamLesovo, isOn2]);
  const date3 = useMemo(() => Date.now(), [streamМТ, isOn3]);
  const date4 = useMemo(() => Date.now(), [streamCP, isOn4]);


  return (  // Турция
    <>
      <RowWrapper>
        {/* Капитан Андреево */}
        <ImagePlayer
          id="kpkl" isActive={isOn1} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${streamKA}.jpg?${date1}`}
        >
          <LSToggler isOn={isOn1} onToggle={toggleIsOn1} />
          <Title value={"Капитан Андреево"} updateLabel="през 10 минути" />
          {isOn1 && (<>
            <ChangeCamButton streamIndex={streamKA} onClick={setStreamKA} indexCount={4} />
            <FSButton fsElementId="kpkl" sx={{ bottom: 50 }} />
          </>)}
        </ImagePlayer>

        {/* Лесово */}
        <ImagePlayer
          id="lesv" isActive={isOn2} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getLesovoSource(streamLesovo)}.jpg?${date2}`}
        >
          <LSToggler isOn={isOn2} onToggle={toggleIsOn2} />
          <Title value={"Лесово"} updateLabel="през 10 минути" />
          {isOn2 && (<>
            <ChangeCamButton streamIndex={streamLesovo} onClick={setStreamLesovo} indexCount={3} />
            <FSButton fsElementId="lesv" sx={{ bottom: 50 }} />
          </>)}
        </ImagePlayer>
      </RowWrapper>


      <RowWrapper>
        {/* Малко Търново */}
        <ImagePlayer
          id="mtnv" isActive={isOn3} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getMTSource(streamМТ)}.jpg?${date3}`}
        >
          <LSToggler isOn={isOn3} onToggle={toggleIsOn3} />
          <Title value={"Малко Търново"} updateLabel="през 10 минути" />
          {isOn3 && (<>
            <ChangeCamButton streamIndex={streamМТ} onClick={setStreamMT} indexCount={2} />
            <FSButton fsElementId="mtnv" sx={{ bottom: 50 }} />
          </>)}
        </ImagePlayer>

        {/* Черекьой - Пазаркуле */}
        <ImagePlayer
          id="chpk" isActive={isOn4} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getCPSource(streamCP)}.jpg?${date4}`}
        >
          <LSToggler isOn={isOn4} onToggle={toggleIsOn4} />
          <Title value={"Черекьой - Пазаркуле"} updateLabel="през 10 минути" />
          {isOn4 && (<>
            <ChangeCamButton streamIndex={streamCP} onClick={setStreamCP} indexCount={2} />
            <FSButton fsElementId="chpk" sx={{ bottom: 50 }} />
          </>)}
        </ImagePlayer>
      </RowWrapper>
    </>
  );
}



export default Turkiye;
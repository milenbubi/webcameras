import { useMemo, useState } from "react";
import RowWrapper from "../Components/RowWrapper";
import { useBooleanLS } from "../Utils/localStorage";
import ImagePlayer from "../Components/players/ImagePlayer";
import ChangeCamButton from "../Components/ChangeCamButton";

// https://www.canlimobeseizle.com/wp-content/uploads/custom-images/resim1.jpg?t=0123456789
// This URL includes a query parameter (?0123456789) to prevent 
// browser caching and ensure the image is always fetched freshly from the server, 
// rather than served from the browser or intermediary cache.

// https://www.canlimobeseizle.com/turkiye-sinir-kapilari-canli-izle
// Cameras from all Turkish border checkpoints.

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
  const [streamLS, setStreamLS] = useState(1);
  const [streamMT, setStreamMT] = useState(1);
  const [streamCP, setStreamCP] = useState(1);
  const { isBooleanLSOn: isOn1, toggleBooleanLS: toggleIsOn1 } = useBooleanLS("kpkl");
  const { isBooleanLSOn: isOn2, toggleBooleanLS: toggleIsOn2 } = useBooleanLS("lesv");
  const { isBooleanLSOn: isOn3, toggleBooleanLS: toggleIsOn3 } = useBooleanLS("mtnv");
  const { isBooleanLSOn: isOn4, toggleBooleanLS: toggleIsOn4 } = useBooleanLS("chpk");

  // Cache date index
  const date1 = useMemo(() => Date.now(), [streamKA, isOn1]);
  const date2 = useMemo(() => Date.now(), [streamLS, isOn2]);
  const date3 = useMemo(() => Date.now(), [streamMT, isOn3]);
  const date4 = useMemo(() => Date.now(), [streamCP, isOn4]);


  return (  // Турция
    <>
      <RowWrapper>
        {/* Капитан Андреево */}
        <ImagePlayer
          id="kpkl" isActive={isOn1} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${streamKA}.jpg?t=${date1}`}
          onToggle={toggleIsOn1}
          title="Капитан Андреево" imageUpdateLabel="през 10 минути"
          fsBtnSx={{ bottom: 50 }}
          specialControls={<ChangeCamButton camIndex={streamKA} onClick={setStreamKA} camCount={4} />}
        />

        {/* Лесово */}
        <ImagePlayer
          id="lesv" isActive={isOn2} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getLesovoSource(streamLS)}.jpg?t=${date2}`}
          onToggle={toggleIsOn2}
          title="Лесово" imageUpdateLabel="през 10 минути"
          fsBtnSx={{ bottom: 50 }}
          specialControls={<ChangeCamButton camIndex={streamLS} onClick={setStreamLS} camCount={3} />}
        />
      </RowWrapper>


      <RowWrapper>
        {/* Малко Търново */}
        <ImagePlayer
          id="mtnv" isActive={isOn3} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getMTSource(streamMT)}.jpg?t=${date3}`}
          onToggle={toggleIsOn3}
          title="Малко Търново" imageUpdateLabel="през 10 минути"
          specialControls={<ChangeCamButton camIndex={streamMT} onClick={setStreamMT} camCount={2} />}
        />

        {/* Черекьой - Пазаркуле */}
        <ImagePlayer
          id="chpk" isActive={isOn4} stretchToFit
          url={`https://canlimobeseizle.com/wp-content/uploads/custom-images/resim${getCPSource(streamCP)}.jpg?t=${date4}`}
          onToggle={toggleIsOn4}
          title="Черекьой - Пазаркуле" imageUpdateLabel="през 10 минути"
          fsBtnSx={{ bottom: 50 }}
          specialControls={<ChangeCamButton camIndex={streamCP} onClick={setStreamCP} camCount={2} />}
        />
      </RowWrapper>
    </>
  );
}



export default Turkiye;
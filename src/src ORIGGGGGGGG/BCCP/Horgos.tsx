import { useState } from "react";
import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";
import ChangeCamButton from "../Components/ChangeCamButton";



function Horgos() {
  const [streamToHUNG, setStreamToHUNG] = useState(1);
  const [streamToSRB, setStreamToSRB] = useState(1);


  return (  // Хоргош
    <Centered gap={5} pt={3} width="100%" flexWrap="wrap">


      <Centered id="hth" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={`https://live.uzivokamere.com/${streamToHUNG === 1 ? "amss_" : ""}horgos2`}
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Хоргош - към Унгария" />
        <ChangeCamButton streamIndex={streamToHUNG} sx={{ top: 20 }} onClick={setStreamToHUNG} />
        <FSButton fsElementId="hth" />
      </Centered>


      <Centered id="hts" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src={`https://live.uzivokamere.com/${streamToSRB === 1 ? "amss_" : ""}horgos1`}
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Хоргош - към Сърбия" />
        <ChangeCamButton streamIndex={streamToSRB} sx={{ top: 20 }} onClick={setStreamToSRB} />
        <FSButton fsElementId="hts" />
      </Centered>


    </Centered>
  );
}



export default Horgos;
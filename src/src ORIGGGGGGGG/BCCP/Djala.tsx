import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";



function Djala() {
  return (  // Ђала
    <Centered gap={5} pt={3} width="100%" flexWrap="wrap">


      <Centered id="tth" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src="https://live.uzivokamere.com/djala1"
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Ђала - към Унгария" />
        <FSButton fsElementId="tth" />
      </Centered>


      <Centered id="tts" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src="https://live.uzivokamere.com/djala2"
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Ђала - към Сърбия" />
        <FSButton fsElementId="tts" />
      </Centered>


    </Centered>
  );
}



export default Djala;
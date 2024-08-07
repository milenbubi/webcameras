import Title from "../Components/Title";
import Centered from "../Utils/Centered";
import FSButton from "../Components/FSButton";



function Kelebia() {
  return (  // Келебия
    <Centered gap={5} pt={3} width="100%" flexWrap="wrap">


      <Centered id="khun" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src="https://live.uzivokamere.com/kelebija2/"
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Келебия - към Унгария" />
        <FSButton fsElementId="khun" />
      </Centered>


      <Centered id="ksrb" width="100%" maxHeight="100%" position="relative" sx={{ maxWidth: 700 }}>
        <iframe
          src="https://live.uzivokamere.com/kelebija1"
          style={{ border: "none", width: "100%", maxHeight: "100%", aspectRatio: "16/9" }}
        />
        <Title value="Келебия - към Сърбия" />
        <FSButton fsElementId="ksrb" />
      </Centered>


    </Centered>
  );
}



export default Kelebia;
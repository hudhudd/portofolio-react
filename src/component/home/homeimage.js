import { MediaQuery, Image } from "@mantine/core";
import profil3 from "../assets/profil3.png"

function Homeimage() {
  return (
    <div
      className="home--image"
      smallerThan="sm"
      styles={{ display: "none" }}
      style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
    >
      <MediaQuery smallerThan={1255} styles={{ display: "none" }}>
        <Image src={profil3} alt="With default placeholder" withPlaceholder />
      </MediaQuery>
    </div>
  );
}

export default Homeimage;

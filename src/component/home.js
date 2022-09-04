import { Grid, Image } from "@mantine/core";
import profil3 from "../component/assets/profil3.png";

function Home() {
  return (
    <Grid className="home--all">
      <div className="home--data">
        <h1>Hi,</h1>
        <h1>
          I am <span className="home--name">Yehuda</span>
        </h1>
        <h1>Front End and</h1>
        <h1>Android Developer</h1>
      </div>

      <div
        className="home--image"
        style={{ width:300 , marginLeft: "auto", marginRight: "auto" }}
      >
        <Image src={profil3} alt="With default placeholder" withPlaceholder />
      </div>
    </Grid>
  );
}

export default Home;

import { Grid, Image, MediaQuery } from "@mantine/core";
import profil3 from "../component/assets/profil3.png";
import { useInView } from "react-intersection-observer";

function Home() {
  const { ref, inView, entry } = useInView({
    threshold: 0.01,
  });

  return (
    <div
      className={[`${inView ? "showClass" : ""}`].join(" ")}
      id="h"
      ref={ref}
    >
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
          smallerThan="sm"
          styles={{ display: "none" }}
          style={{ width: 300, marginLeft: "auto", marginRight: "auto" }}
        >
          <MediaQuery smallerThan={1255} styles={{ display: "none" }}>
            <Image
              src={profil3}
              alt="With default placeholder"
              withPlaceholder
            />
          </MediaQuery>
        </div>
      </Grid>
    </div>
  );
}

export default Home;

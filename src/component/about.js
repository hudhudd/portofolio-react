import { Grid, Image } from "@mantine/core";
import profil4 from "../component/assets/profil4.png";

function About() {
  return (
    <Grid className="about--container">
      <div className="section--title">
        <h1>About</h1>
      </div>
      <div className="about--content">
        <Image
          className="about--img"
          src={profil4}
          alt="With default placeholder"
          withPlaceholder
        />
        <div className="about--text">
          <h2 className="about--sub">I am Yehuda</h2>
          <p>
            I am a bachelor's degree of Electrical Engineering Gadjah Mada
            University. I am interested in software engineering, back-end
            development, IoT development, hardware engineering, and firmware
            programming.
          </p>
          <p>
            I am a fast learner, excelling on my study, and delivering well-done
            project on my internship. I am adabtable and working well in both
            team and individual settings.
          </p>
        </div>
      </div>
    </Grid>
  );
}

export default About;

import { Grid, Image, Button } from "@mantine/core";
import profil4 from "../component/assets/profil4.png";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  return (
    <div
      className={[`${inView ? "showClass" : ""}`].join(" ")}
      id="about"
      ref={ref}
    >
      <Grid className="about--container">
        <div className="section--title">
          <h1>About</h1>
        </div>
        <Grid className="about--content">
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
              I am a fast learner, excelling on my study, and delivering
              well-done project on my internship. I am adabtable and working
              well in both team and individual settings.
            </p>
            <Button
              variant="outline"
              color="green"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/13Q3bqV5iSt2d71A5yjmAbqNP713xDO92/view?usp=sharing"
              radius="md"
            >
              Download CV
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;

import { Grid, Image, Button } from "@mantine/core";
import profil4 from "../component/assets/profil4.png";
import { useInView } from "react-intersection-observer";
import classes from "./about.module.css"

function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });
  return (
    <div
      className={[`${inView ? "showClass" : ""}`].join(" ")}
      id="abt"
      ref={ref}
    >
      <Grid className={classes.container}>
        <div className="section--title">
          <h1>About</h1>
        </div>
        <Grid className={classes.content}>
          <Image
            className={classes.img}
            src={profil4}
            alt="With default placeholder"
            withPlaceholder
          />
          <div className={classes.text}>
            <h2 className={classes.sub}>I am Yehuda</h2>
            <p>
              I am a unergraduate degree of Electrical Engineering Gadjah Mada
              University. I am interested in software engineering, front-end
              development, back-end development, IoT development, hardware
              engineering, and firmware programming.
            </p>
            <p>
              I am a fast learner, fast worker, excelling on my study, and delivering
              well-done project on my internship. I am adabtable and working
              well in both team and individual settings.
            </p>
            <Button
              variant="outline"
              color="green"
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1PuYXRG-tib0nObHG2V4iZrBgnLrgmbEa/view?usp=share_link"
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

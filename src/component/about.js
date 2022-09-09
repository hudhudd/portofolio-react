import { Grid, Image, Button, createStyles } from "@mantine/core";
import profil4 from "../component/assets/profil4.png";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const { classes } = useStyles();

  return (
    <div
      id="about"
      ref={ref}
      className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
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
              href=""
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

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "90vh",
    position: "relative",
    paddingTop: 100,
    paddingBottom: 130,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },
}));

import { Grid } from "@mantine/core";
import { useInView } from "react-intersection-observer";
// import { Chrono } from "react-chrono"
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import Eduhistory from "./Eduhistory";
import Edudetails from "./Edudetails";
import EduSchool from "./EduSchool";
import classes from "../education/Education.module.css";

const Education = () => {
  const [educationHandler, setEducationHandler] = useState(0);
  const matches = useMediaQuery("(max-width: 1280px)");
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  console.log(educationHandler);

  return (
    <div id="ed" ref={ref}>
      <div className="section--title">
        <h1>Education</h1>
      </div>
      <Grid
        className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
      >
        <Grid.Col span={matches ? 4 : 3} className={classes.educationDivStyle}>
          <Eduhistory setEducationHandler={setEducationHandler} />
        </Grid.Col>

        <Grid.Col span={matches ? 8 : 5} className={classes.educationDivStyle}>
          <Edudetails active={educationHandler} />
        </Grid.Col>
        <Grid.Col
          span={4}
          className={classes.institudeDetailStyle}
          style={{ display: matches ? "none" : "flex" }}
        >
          <EduSchool active={educationHandler} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Education;

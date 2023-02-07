import { Card, Grid, Text, Avatar, Center } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import classes from "./skill.module.css";
import { IconContext } from "react-icons";
import skilldata from "../component/data/skilldata";

function Skills() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      className={[`${inView ? "showClass" : ""}`].join(" ")}
      id="sk"
      ref={ref}
    >
      <IconContext.Provider value={{ color: "green", size: "100" }}>
        <div className="section--title">
          <h1>Skills</h1>
        </div>
        <Card
          
          className={classes.card}          
        >
          <Grid className={classes.grid} gutter={"xs"}>
            {skilldata.map((skill) => (
              <>
                <Grid.Col  span={3}>
                  <Center>
                    <Avatar className={classes.iconavatar} size={"100px"}>{skill.icon}</Avatar>
                  </Center>
                  <Text className={classes.icontext} align="center" weight={700} color={"#030B07"}>
                    {skill.text}
                  </Text>
                </Grid.Col>
              </>
            ))}
          </Grid>
        </Card>
      </IconContext.Provider>
    </div>
  );
}

export default Skills;

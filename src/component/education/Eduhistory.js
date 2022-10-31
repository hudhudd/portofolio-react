import { Stack, Timeline, Text } from "@mantine/core";
import React, { useState } from "react";
import classes from "../education/Eduhistory.module.css";

const Eduhistory = (props) => {
  const [active, setActive] = useState(0);

  props.setEducationHandler(active);

  return (
    <Stack justify="center" className={classes.stackStyle}>
      <Timeline
        color="green"
        radius="lg"
        active={active}
        lineWidth={2}
        bulletSize={30}
        align="right"
      >
        <Timeline.Item
          title="Undergraduate"
          onClick={() => {
            setActive(0);
          }}
          className={classes.textTitle}
        >
          <Text size="lg" className={classes.textDesc}>
            Universitas Gadjah Mada
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Senior High School"
          onClick={() => {
            setActive(1);
          }}
          className={classes.textTitle}
        >
          <Text size="lg" className={classes.textDesc}>
            SMA Negeri 1 Boyolali
          </Text>
        </Timeline.Item>
      </Timeline>
    </Stack>
  );
};

export default Eduhistory;

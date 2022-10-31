import { List, Stack, Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import edudata from "../data/edudata";
import classes from "../education/Edudetails.module.css";

const Edudetails = (props) => {
  const educationData = edudata[props.active];
  const activities = educationData.activities;
  const matches = useMediaQuery("(max-width: 750px)");

  return (
    <Stack className={classes.stackStyle}>
      <Title className={classes.textTitle} color="#40C057" align="center">
        Brief Description
      </Title>
      <Text align="center" weight="bold" size={matches ? 18 : 25}>
        {educationData.institution}
      </Text>
      <Text align="center" weight="bold" size={matches ? 15 : 20}>
        {educationData.startDate} - {educationData.endDate}
      </Text>
      {props.active === 0 ? (
        <Text align="center" size={matches ? 15 : 20}>
          Major - {educationData.major}{" "}
          <Text component="span" weight="bold">
            {" "}
            (GPA : {educationData.finalScore})
          </Text>
        </Text>
      ) : (
        <Text align="center" size={matches ? 15 : 20}>
          Major - {educationData.major}{" "}
        </Text>
      )}

      <Title className={classes.textTitle} color="#40C057" align="center">
        Achievement & Activities
      </Title>
      <List spacing="xs" size="sm" className={classes.listStyle}>
        {activities.map((activity) => (
          <List.Item key={activity.title}>
            <Text weight="bold" size={matches ? 15 : 20}>
              {activity.title}
            </Text>
            <Text>{activity.description}</Text>
          </List.Item>
        ))}
      </List>
    </Stack>
  );
};

export default Edudetails;

import { Image, Stack, Text, Title } from "@mantine/core";
import React from "react";
import edudata from "../data/edudata";
import classes from "./EduSchool.module.css";

const EduSchool = (props) => {
  const educationData = edudata[props.active];

  return (
    <Stack className={classes.stackStyle}>
      <Image
        height={150}
        fit="contain"
        align="center"
        src={educationData.imgurl}
      ></Image>
      <Title
        order={1}
        color="#40C057"
        className={classes.textTitle}
        align="center"
      >
        {educationData.institution}
      </Title>
      <Text align="center">{educationData.address}</Text>
      <Text align="center" color="#40C057" weight={500}>
        CP : {educationData.contact}
      </Text>
      <Text align="justify">{educationData.description}</Text>
    </Stack>
  );
};

export default EduSchool;

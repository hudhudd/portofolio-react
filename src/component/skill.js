import {
    Card,
    Group,
    Grid,
    Stack,
    Progress,
    CardSection,
    Image,
    ScrollArea,
    MediaQuery,
  } from "@mantine/core";
  import { useInView } from "react-intersection-observer";
  import {
    IconBrandReactNative,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandKotlin,
  } from "@tabler/icons";
  import "./skill.css";
  
  function Skills() {
    const { ref, inView, entry } = useInView({
      threshold: 0.1,
    });
  
    return (
      <div
        className={[`${inView ? "showClass" : ""}`].join(" ")}
        id="skills"
        ref={ref}
      >
        <div className="section--title">
          <h1>About</h1>
        </div>
        <Grid grow>
          <Grid.Col md={6} lg={3}>
            <ScrollArea>
              <Stack spacing="xl">
                <Card
                  withBorder
                  shadow="sm"
                  radius="md"
                  className="skill--card"
                  mx={0}
                >
                  <Stack>
                    <CardSection>
                      <Group position="apart">
                        <div className="skill--name">
                          <IconBrandReactNative />
                          <h4>React JS</h4>
                        </div>
                        <h4 className="card--persen">75%</h4>
                      </Group>
                    </CardSection>
                    <Progress
                      className="skill--prog"
                      color="green"
                      size="sm"
                      value={75}
                    />
                  </Stack>
                </Card>
  
                <Card withBorder shadow="sm" radius="md" className="skill-card">
                  <Stack>
                    <CardSection>
                      <Group position="apart">
                        <div className="skill--name">
                          <IconBrandCss3 />
                          <h4>CSS</h4>
                        </div>
                        <h4 className="card--persen">80%</h4>
                      </Group>
                    </CardSection>
                    <Progress color="green" size="sm" value={80} />
                  </Stack>
                </Card>
  
                <Card withBorder shadow="sm" radius="md">
                  <Stack>
                    <CardSection>
                      <Group position="apart">
                        <div className="skill--name">
                          <IconBrandKotlin />
                          <h4>Kotlin</h4>
                        </div>
                        <h4 className="card--persen">70%</h4>
                      </Group>
                    </CardSection>
                    <Progress color="green" size="sm" value={70} />
                  </Stack>
                </Card>
  
                <Card withBorder shadow="sm" radius="md">
                  <Stack>
                    <CardSection>
                      <Group position="apart">
                        <div className="skill--name">
                          <IconBrandJavascript />
                          <h4>Java Script</h4>
                        </div>
                        <h4 className="card--persen">70%</h4>
                      </Group>
                    </CardSection>
                    <Progress color="green" size="sm" value={70} />
                  </Stack>
                </Card>
              </Stack>
            </ScrollArea>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Image
                radius="md"
                src="https://sas-production-uploads.s3.eu-west-2.amazonaws.com/article_main_img/blog/large_450890146.jpeg"
              />
            </MediaQuery>
          </Grid.Col>
        </Grid>
      </div>
    );
  }
  
  export default Skills;
  
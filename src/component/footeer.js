import {
  MediaQuery,
  Button,
  Group,
  CopyButton,
  Tooltip,
  Text,
  Grid,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconBrandMantine,
  IconBrandReactNative,
} from "@tabler/icons";

function Footeer() {
  return (
    <footer height={65} p="md">
      <MediaQuery>
        <Grid justify="space-between">
          <Group>
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yehuda-yovel/"
              leftIcon={<IconBrandLinkedin size={18} />}
              styles={(theme) => ({
                root: {
                  backgroundColor: "#0072b1",
                  paddingRight: 0,
                  paddingLeft: 11,

                  "&:hover": {
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  },
                },
              })}
            ></Button>

            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/hudhudd"
              leftIcon={<IconBrandGithub size={18} />}
              styles={(theme) => ({
                root: {
                  backgroundColor: "#4078c0",
                  paddingRight: 0,
                  paddingLeft: 11,

                  "&:hover": {
                    backgroundColor: theme.fn.darken("#228BE6", 0.05),
                  },
                },
              })}
            ></Button>

            <CopyButton value="yehudaor987@gmail.com">
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="top"
                >
                  <Button
                    leftIcon={<IconMail size={18} />}
                    onClick={copy}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "#ADB5BD ",
                        paddingRight: 0,
                        paddingLeft: 11,

                        "&:hover": {
                          backgroundColor: theme.fn.darken("#CED4DA", 0.05),
                        },
                      },
                    })}
                  ></Button>
                </Tooltip>
              )}
            </CopyButton>
          </Group>
          <Group spacing="xs" position="right" >
            <Text>Made With</Text>
            <IconBrandReactNative />
            <Text>React JS</Text>
            <Text> and </Text>
            <IconBrandMantine />
            <Text>Mantine UI</Text>
          </Group>
        </Grid>
      </MediaQuery>
    </footer>
  );
}

export default Footeer;

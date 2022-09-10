import { MediaQuery, Button, Group, CopyButton, Tooltip } from "@mantine/core";
import { IconBrandLinkedin, IconBrandInstagram, IconMail } from "@tabler/icons";

function Footeer() {
  return (
    <footer height={65} p="md">
      <MediaQuery>
        <Group>
          <Button
            component="a"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/yehuda-suryayanna-5016ba114/"
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
            href="https://www.instagram.com/hoeddah_3/"
            leftIcon={<IconBrandInstagram size={18} />}
            styles={(theme) => ({
              root: {
                backgroundColor: "#ed6ea0",
                paddingRight: 0,
                paddingLeft: 11,

                "&:hover": {
                  backgroundColor: theme.fn.darken("#FAA2C1", 0.05),
                },
              },
            })}
          ></Button>

          <CopyButton value="yehudaor987@gmail.com">
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow position="top">
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
      </MediaQuery>
    </footer>
  );
}

export default Footeer;

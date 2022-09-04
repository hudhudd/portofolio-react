import { MediaQuery, Button } from "@mantine/core";
import { IconBrandTwitter } from "@tabler/icons";

function Footeer() {
  return (
    <footer height={65} p="md">
      <MediaQuery>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/mantinedev"
          leftIcon={<IconBrandTwitter size={18} />}
          styles={(theme) => ({
            root: {
              backgroundColor: "#00acee",
              paddingRight: 0,

              "&:hover": {
                backgroundColor: theme.fn.darken("#00acee", 0.05),
              },
            },
          })}
        ></Button>
      </MediaQuery>
    </footer>
  );
}

export default Footeer;

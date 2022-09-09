import { Group, Header } from "@mantine/core";
import { createStyles } from "@mantine/core";
import Headerbutton from "./headerbutton";

function HeadNav() {
  //   const { classes } = useStyles();
  //   const theme = useMantineTheme();
  //   const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <Header height={70} p="md">
      {/* <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Menu shadow="md" width={300}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                color="green"
                variant="link"
                icon={<IconHome size={14} />}
                component={Link}
                to="home"
                spy={true}
                smooth={true}
              >
                Home
              </Menu.Item>

              <Menu.Item
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                icon={<IconUserCircle size={14} />}
              >
                About
              </Menu.Item>

              <Menu.Item
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                icon={<IconBooks size={14} />}
              >
                Education
              </Menu.Item>

              <Menu.Item
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                icon={<IconDeviceLaptop size={14} />}
              >
                Experience
              </Menu.Item>

              <Menu.Item
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                icon={<IconTerminal2 size={14} />}
              >
                Skills
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Group className={classes.buttonGroup} spacing="xs">
            <Button
              color="green"
              variant="subtle"
              radius="xs"
              size="lg"
              component="a"
              href="#home"
            >
              Home
            </Button>

            <Button
              color="green"
              variant="subtle"
              radius="xs"
              size="lg"
              component="a"
              href="#home"
            >
              About
            </Button>

            <Button color="green" variant="subtle" radius="xs" size="lg">
              Education
            </Button>

            <Button color="green" variant="subtle" radius="xs" size="lg">
              Experience
            </Button>

            <Button color="green" variant="subtle" radius="xs" size="lg">
              Skills
            </Button>
          </Group>
        </MediaQuery>
      </div> */}
      <Group position="apart" className={classes.headerStyle}>
        <Headerbutton />
      </Group>
    </Header>
  );
}

export default HeadNav;

const useStyles = createStyles((theme, _params, getRef) => ({
  headerStyle: {
    marginLeft: "2vh",
    paddingTop: "0.5vh",
  },
}));

import { useState } from "react";
import "../navbar/appshell.css";
import { useWindowScroll } from "@mantine/hooks";
import {
  AppShell,
  Menu,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

import {
  IconHome,
  IconUserCircle,
  IconBooks,
  IconDeviceLaptop,
  IconTerminal2,
} from "@tabler/icons";

import { Stack, Group, Button } from "@mantine/core";
import Home from "../home";
import About from "../about";
import Experience from "../experience";
import Education from "../education/Education";
import Skills from "../skill";
import Footeer from "../footeer";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
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
                    onClick={() => scrollTo({ y: 0 })}
                    component="a"
                    href="#home"
                  >
                    Home
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconUserCircle size={14} />}
                    onClick={() => scrollTo({ y: 645.6 })}
                    component="a"
                    href="#about"
                  >
                    About
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconDeviceLaptop size={14} />}
                    onClick={() => scrollTo({ y: 1572 })}
                    component="a"
                    href="#experience"
                  >
                    Experience
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconBooks size={14} />}
                    onClick={() => scrollTo({ y: 4291.2 })}
                    component="a"
                    href="#education"
                  >
                    Education
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconTerminal2 size={14} />}
                    onClick={() => scrollTo({ y: 5043.2 })}
                    component="a"
                    href="#skills"
                  >
                    Skills
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Group className="shell--header" spacing="xs">
                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  onClick={() => scrollTo({ y: 0 })}
                  href="#home"
                  component="a"
                >
                  Home
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  onClick={() => scrollTo({ y: 653 })}
                  href="#about"
                  component="a"
                >
                  About
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  onClick={() => scrollTo({ y: 1269 })}
                  href="#experience"
                  component="a"
                >
                  Experience
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  onClick={() => scrollTo({ y: 3180 })}
                  href="#education"
                  component="a"
                >
                  Education
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  onClick={() => scrollTo({ y: 4243.2 })}
                  href="#skills"
                  component="a"
                >
                  Skills
                </Button>
              </Group>
            </MediaQuery>
          </div>
        </Header>
      }
    >
      <Stack>
        <Home />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Footeer />
      </Stack>
    </AppShell>
  );
}

import { useState } from "react";
import "../navbar/appshell.css"
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
import Education from "../education";
import Skills from "../skill";
import Footeer from "../footeer";

export default function AppShellDemo() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

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
                    component="a"
                    href="#exp"
                  >
                    Experience
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconBooks size={14} />}
                    component="a"
                    href="#edu"
                  >
                    Education
                  </Menu.Item>

                  <Menu.Item
                    color="green"
                    variant="subtle"
                    radius="xs"
                    size="lg"
                    icon={<IconTerminal2 size={14} />}
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
                  href="#about"
                >
                  About
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  component="a"
                  href="#exp"
                >
                  Experience
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  component="a"
                  href="#edu"
                >
                  Education
                </Button>

                <Button
                  color="green"
                  variant="subtle"
                  radius="xs"
                  size="lg"
                  component="a"
                  href="#skills"
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

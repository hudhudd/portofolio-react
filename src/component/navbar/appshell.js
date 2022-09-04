import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

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
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      headerOffsetBreakpoint="sm"
      navbar={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            style={{ flexDirection: "row", flexWrap: "wrap" }}
          >
            <Stack className="shell--nav">
              <Button
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                compact
              >
                Home
              </Button>

              <Button
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                compact
              >
                About
              </Button>

              <Button
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                compact
              >
                Education
              </Button>

              <Button
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                compact
              >
                Experience
              </Button>

              <Button
                color="green"
                variant="subtle"
                radius="xs"
                size="lg"
                compact
              >
                Skills
              </Button>
            </Stack>
          </Navbar>
        </MediaQuery>
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Group className="shell--header" spacing="xs">
                <Button color="green" variant="subtle" radius="xs" size="lg">
                  Home
                </Button>

                <Button color="green" variant="subtle" radius="xs" size="lg">
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

import { AppShell, useMantineTheme, Stack } from "@mantine/core";

import Home from "../home/home";
import About from "../about";
import Experience from "../experience";
import Education from "../education";
import Skills from "../skill";
import Footeer from "../footeer";
import HeadNav from "./header";

export default function AppShellDemo() {
  const theme = useMantineTheme();
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
      header={<HeadNav />}
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

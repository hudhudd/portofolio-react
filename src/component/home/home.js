import { Overlay, createStyles, Group,  } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import Homedata from "./homedata";
import Homeimage from "./homeimage";

function Home() {
  const { classes } = useStyles();
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      className={[classes.wrapper, `${inView ? "showClass" : ""}`].join(" ")}
      id="home"
      ref={ref}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Group position="apart">
        <Homedata />
        <Homeimage />
      </Group>
    </div>
  );
}

export default Home;

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "90vh",
    position: "relative",
    paddingTop: 100,
    paddingBottom: 130,
    backgroundSize: "cover",
    backgroundPosition: "center",

    "@media (max-width: 520px)": {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },
}));

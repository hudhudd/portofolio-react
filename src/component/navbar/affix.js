import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import {IconArrowUp} from "@tabler/icons"

export default function Topscroll() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix position={{ bottom: 60, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              radius="lg"
              color= 'green'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              leftIcon={<IconArrowUp size={14} />}
            >
              Scroll to Top
              x: {scroll.x}, y: {scroll.y}
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  );
}

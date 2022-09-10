import { Stack, Image } from "@mantine/core";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useInView } from "react-intersection-observer";

const andro = [
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586466010341436/andro1.jpeg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586466299760672/andro2.jpeg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586466568192050/andro3.jpeg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586466849198080/andro4.jpeg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586467092480060/andro5.jpeg",
];

const django = [
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586504904118322/django2.png",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586505394855976/django3.png",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586505675870249/django1.png",
];

const kp = [
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586550240362516/kp4.jpg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586549980319754/kp3.jpg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586549372141578/kp1.jpg",
  "https://cdn.discordapp.com/attachments/860057664984711188/1016586549657337856/kp2.jpg",
];

function Experience() {
  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  const autoplay1 = useRef(Autoplay({ delay: 2000 }));
  const autoplay2 = useRef(Autoplay({ delay: 2000 }));
  const autoplay3 = useRef(Autoplay({ delay: 2000 }));

  const slides1 = andro.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const slides2 = django.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const slides3 = kp.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  return (
    <div
      className={[`${inView ? "showClass" : ""}`].join(" ")}
      id="exp"
      ref={ref}
    >
      <div className="exp--container">
        <div className="section--title">
          <h1>Experience</h1>
        </div>
        <Stack className="exp-all">
          <div className="exp--andro">
            <div className="andro--img">
              <Carousel
                sx={{ maxWidth: 230 }}
                withIndicators
                plugins={[autoplay1.current]}
                onMouseEnter={autoplay1.current.stop}
                onMouseLeave={autoplay1.current.reset}
                slideGap="md"
                styles={{
                  control: {
                    "&[data-inactive]": {
                      opacity: 0,
                      cursor: "default",
                    },
                  },
                }}
              >
                {slides1}
              </Carousel>
            </div>
            <div className="andro--text">
              <h2>Android Developer</h2>
              <h3>Capstone Project 2019-2022</h3>
              <p className="andro--par">
                Creating the UI/UX, front-end design, setting connecton to the
                Django Backend Server, and setting up connection to connect with
                MQTT protocol for IoT purposes
              </p>
            </div>
          </div>

          <div className="exp--backend">
            <div className="django--img">
              <Carousel
                sx={{ maxWidth: 700 }}
                withIndicators
                plugins={[autoplay2.current]}
                onMouseEnter={autoplay2.current.stop}
                onMouseLeave={autoplay2.current.reset}
                slideGap="md"
                styles={{
                  control: {
                    "&[data-inactive]": {
                      opacity: 0,
                      cursor: "default",
                    },
                  },
                }}
              >
                {slides2}
              </Carousel>
            </div>
            <div className="django--text">
              <h2>Back-End Developer</h2>
              <h3>Capstone Project 2019-2022</h3>
              <p className="django--par">
                Developing Back-End API using Django and Django Rest Framework,
                Building own MQTT Broker using MOSQUITTO, and Deploying Back-End
                server using Amazong E2C.
              </p>
            </div>
          </div>

          <div className="exp--hardware">
            <div className="hw--img">
              <Carousel
                sx={{ maxWidth: 700 }}
                withIndicators
                plugins={[autoplay3.current]}
                onMouseEnter={autoplay3.current.stop}
                onMouseLeave={autoplay3.current.reset}
                slideGap="md"
                styles={{
                  control: {
                    "&[data-inactive]": {
                      opacity: 0,
                      cursor: "default",
                    },
                  },
                }}
              >
                {slides3}
              </Carousel>
            </div>
            <div className="hw--text">
              <h2>Hardware Developer</h2>
              <h3>PT. Merapi Tani Instrument 2019</h3>
              <p className="hw--par">
                Researching the maximum and minimum potential of
                ESP32-WROOM-32D, bq24650EVM, TPS63020EVM-487, and TPS63802EVM.
              </p>
              <p className="hw--par">
                Making the schematics design of ESP32-WROOM-32D.
              </p>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  );
}

export default Experience;

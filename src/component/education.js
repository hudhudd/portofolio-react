import { Stack } from "@mantine/core";
import { Chrono } from "react-chrono";
// import data from "./data";

function Education() {
  const data = [
    {
      title: "Universitas Gadjah Mada",
      media: {
        name: "Logo UGM",
        source: {
          url: "https://cdn.discordapp.com/attachments/860057664984711188/1017040486877380628/ugm.png",
        },
        type: "IMAGE",
      },
      cardTitle: "Universitas Gadjah Mada",
      cardSubtitle: ["2017 - 2022"],
      cardDetailedText: [
        <div>
          <h3 className="edu--info2">
            Major - Electrical Engineering with GPA : 3.49
          </h3>
          <h4 className="edu--cdinfo">Activities:</h4>
          <ul className="edu--ul">
            <li>Tutor Assistant of Electrical Physics (2020)</li>
            <li>Tutor Assistant of Electrical Mathematics (2019)</li>
            <li>
              Join as HRD at Gadjah Mada Swimming Student Activity Unit (2018 -
              2019)
            </li>
          </ul>
        </div>,
      ],
    },
    {
      media: {
        name: "Logo SMANSA",
        source: {
          url: "https://cdn.discordapp.com/attachments/860057664984711188/1017040487196135445/sma.png ",
        },
        type: "IMAGE",
      },
      title: "SMA Negeri 1 Boyolali",
      cardTitle: "SMA Negeri 1 Boyolali",
      cardSubtitle: "2015 - 2017",
      cardDetailedText: [
        <div>
          <h3 className="edu--info2">Graduated within only 2 years of study</h3>
          <h4 className="edu--cdinfo">Activities:</h4>
          <ul className="edu--ul">
            <li>Member of Boy Scouts</li>
            <li>Member of Swimming Athletes</li>
          </ul>
        </div>,
      ],
    },
  ];

  return (
    <div className="edu--container">
      <Stack>
        <div className="section--title">
          <h1>Education</h1>
        </div>
        <div
          className="edu--chrono"
          style={{ width: "700px", height: "800px" }}
        >
          <Chrono
            items={data}
            itemWidth="340"
            mode="HORIZONTAL"
            theme={{
              primary: "green",
              secondary: "#EBFBEE",
              cardBgColor: "#E6FCF5",
              cardForeColor: "#087F5B",
              titleColor: "black",
              titleColorActive: "#2B8A3E",
            }}
            useReadMore="false"
            fontSizes={{
              title: ".9rem",
            }}
            hideControls="true"
          />
        </div>
        <div className="edu--phone" style={{ width: "100%", height: "500px" }}>
          <Chrono
            items={data}
            mode="VERTICAL"
            theme={{
              primary: "green",
              secondary: "#EBFBEE",
              cardBgColor: "#E6FCF5",
              cardForeColor: "#087F5B",
              titleColor: "black",
              titleColorActive: "#2B8A3E",
            }}
            fontSizes={{
              title: ".9rem",
            }}
            hideControls="true"
          />
        </div>
      </Stack>
    </div>
  );
}

export default Education;

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { BsFillTerminalFill } from "react-icons/bs";
import { DiCss3 } from "react-icons/di";
import { FaAws, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiGo, SiKotlin, SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skilldata = [
  {
    icon: <AiFillHtml5 />,
    text: "HTML5",
  },
  {
    icon:<DiCss3/>,
    text: "CSS",
  },
  {
    icon: <IoLogoJavascript/>,
    text:"JavaScript + ES6",
  },
  {
    icon:<FaReact/>,
    text:"React JS",
  },
  {
    icon:<SiKotlin/>,
    text:"Kotlin",
  },
  {
    icon:<GrMysql/>,
    text:"MySQL",
  },
  {
    icon:<TbApi/>,
    text:"REST API",
  },
  {
    icon:<SiVercel/>,
    text:"Vercel",
  },
  {
    icon:<AiFillGithub/>,
    text:"Github",
  },
  {
    icon:<BsFillTerminalFill/>,
    text:"Terminal",
  },
  {
    icon:<FaAws/>,
    text:"Amazon Web Service",
  },
  {
    icon:<SiGo/>,
    text:"Go Language",
  },
];

export default skilldata;

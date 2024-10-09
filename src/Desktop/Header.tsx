import {
  GithubOutlined,
  LinkedinOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { EColors } from "../Util/EColors";
import { Tooltip } from "antd";

export default function Header() {
  return (
    <>
      <section
        style={{ fontFamily: "Inter" }}
        className="mt-72 ml-44 flex justify-between gap-40 animate-slide-in"
      >
        <div className="drop-shadow-md">
          <div
            className="text-2xl"
            style={{ fontWeight: "600", color: EColors.textGray2 }}
          >
            Hi, my name is
          </div>
          <div style={{ fontWeight: "600" }} className="text-8xl  ">
            <span>Shawn </span>
            <span style={{ color: EColors.textGray }}> Montgomery</span>
          </div>
          <div
            className="text-2xl mt-4 "
            style={{ fontWeight: "600", color: EColors.textGray2 }}
          >
            I am a software engineer specializing in fullstack development.
          </div>
          <div
            className="text-2xl mt-4 "
            style={{ fontWeight: "600", color: EColors.textGray2 }}
          >
            shawnrmonty@gmail.com
          </div>
          <div className="flex gap-10 mt-4 text-4xl ">
            <Tooltip title="Github">
              <a href="https://github.com/Shawnm4" target="_blank">
                <GithubOutlined className="cursor-pointer" />
              </a>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <a
                href="https://www.linkedin.com/in/shawn-montgomerydev/"
                target="_blank"
              >
                <LinkedinOutlined className="cursor-pointer" />
              </a>
            </Tooltip>
            <Tooltip title="Resume">
              <a
                href="https://docs.google.com/document/d/1SJbQ08CFvR13VR5WwuODf2j7vUhiCn0tnnXoPN6_ZTg/edit?usp=sharing"
                target="_blank"
              >
                <SolutionOutlined className="cursor-pointer" />
              </a>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-end">
          <div className="text-2xl" style={{ fontFamily: "Orbitron" }}>
            <div style={{ whiteSpace: "nowrap" }} className="mr-3">
              Tech Stack
            </div>
          </div>
          <div className="flex gap-4 mr-20">
            <Tooltip title="HTML"></Tooltip>
            <Tooltip title="HTML">
              <figure>
                <img className="w-10  " src="/html.png" alt="htmllogo" />
              </figure>
            </Tooltip>
            <Tooltip title="CSS">
              <figure>
                <img className="w-10" src="/css-3.png" alt="css logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Javascript">
              <figure>
                <img className="w-10" src="/js.png" alt="javascriptlogo.png" />
              </figure>
            </Tooltip>
            <Tooltip title="Typescript">
              <figure>
                <img
                  className="w-10"
                  src="/typescript.png"
                  alt="typescript logo"
                />
              </figure>
            </Tooltip>
            <Tooltip title="React">
              <figure>
                <img className="w-10" src="/4react.png" alt="react logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Git">
              <figure>
                <img className="w-10" src="/giticon.png" alt="git logo" />
              </figure>
            </Tooltip>
            <Tooltip title="TailWind CSS">
              <figure>
                <img className="w-10" src="/TailwindCSS.png" alt="css logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Node.Js">
              <figure>
                <img className="w-10" src="/nodeJS.png" alt="nodejs logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Python">
              <figure>
                <img className="w-10" src="/Python (1).png" alt="python logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Flask">
              <figure>
                <img className="w-10" src="/Flask.png" alt="python logo" />
              </figure>
            </Tooltip>
            <Tooltip title="Sci-Kit Learn">
              <figure>
                <img
                  className="w-10"
                  src="/scikit-learn.png"
                  alt="Sci-Kit Learn logo"
                />
              </figure>
            </Tooltip>
          </div>
        </div>
      </section>
    </>
  );
}

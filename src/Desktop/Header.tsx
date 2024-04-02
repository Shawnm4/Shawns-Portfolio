import { EColors } from "../Util/EColors";
import { Tooltip } from "antd";

export default function Header() {
  return (
    <>
      <section
        style={{ fontFamily: "Inter" }}
        className="mt-72 ml-44 flex justify-between gap-40"
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
        </div>
        <div className="flex items-end">
          <div className="text-2xl" style={{ fontFamily: "Orbitron" }}>
            <div style={{ whiteSpace: "nowrap" }} className="mr-3">
              Tech Stack
            </div>
          </div>
          <div className="flex gap-4 mr-20">
            <Tooltip title="HTML">
              <figure>
                <img className="w-10  " src="/html.png" alt="htmllogo" />
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
            <Tooltip title="CSS">
              <figure>
                <img className="w-10" src="/css-3.png" alt="css logo" />
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
          </div>
        </div>
      </section>
    </>
  );
}

import { EColors } from "../assets/Util/EColors";
import { Tooltip } from "antd";
// import styles from "./Header.module.css";

export default function Header() {
  return (
    <section
      style={{ fontFamily: "Inter" }}
      className="mt-72 ml-44 flex gap-40"
    >
      <div>
        <div
          className="text-2xl "
          style={{ fontWeight: "600", color: EColors.textGray2 }}
        >
          Hi, my name is
        </div>
        <div style={{ fontWeight: "600" }} className="text-8xl ">
          <span>Shawn </span>
          <span style={{ color: EColors.textGray }}> Montgomery</span>
        </div>
        <div
          className="text-2xl mt-4"
          style={{ fontWeight: "600", color: EColors.textGray2 }}
        >
          I am a software engineer with a passion for excelling in my field.
        </div>
      </div>
      <div className="flex items-end">
        <div className="text-2xl" style={{ fontFamily: "Orbitron" }}>
          <div className="mr-4">Tech Stack</div>
        </div>
        <div className="flex gap-4">
          <Tooltip title="HTML">
            <figure>
              <img className="w-10" src="/html.png" alt="htmllogo" />
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
              <img className="w-10" src="/react.png" alt="react logo" />
            </figure>
          </Tooltip>
          <Tooltip title="Git">
            <figure>
              <img className="w-10" src="/git.png" alt="git logo" />
            </figure>
          </Tooltip>
          <Tooltip title="css">
            <figure>
              <img className="w-10" src="/css-3.png" alt="css logo" />
            </figure>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

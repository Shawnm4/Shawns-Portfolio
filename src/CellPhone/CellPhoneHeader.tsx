import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { EColors } from "../Util/EColors";

export default function CellPhoneHeader() {
  return (
    <>
      <div
        style={{ fontFamily: "Inter" }}
        className=" flex justify-center mt-24 drop-shadow mb-8"
      >
        <div className="text-center">
          <div
            style={{ fontWeight: "600", color: EColors.textGray2 }}
            className="leading-none mb-3 text-xl"
          >
            Hi, my name is
          </div>
          <div
            style={{ fontWeight: "600" }}
            className="leading-none mb-3 text-5xl"
          >
            <div>Shawn</div>
            <div style={{ color: EColors.textGray }}>Montgomery</div>
          </div>
          <div
            style={{ fontWeight: "600", color: EColors.textGray2 }}
            className="text-xl  p-4 leading-none text-center "
          >
            I am a software engineer with a passion for excelling in my field.
          </div>
          <div
            className="text-2xl mt-4 "
            style={{ fontWeight: "600", color: EColors.textGray2 }}
          >
            shawnrmonty@gmail.com
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
        <ul className="flex gap-20 text-4xl cursor-pointer">
          <li>
            <a href="https://github.com/Shawnm4" target="_blank">
              <GithubOutlined />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shawn-montgomery-4760892a6/"
              target="_blank"
            >
              <LinkedinOutlined />
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="text-2xl text-center" style={{ fontFamily: "Orbitron" }}>
        <div
          style={{ whiteSpace: "nowrap", fontWeight: "600" }}
          className="mr-3"
        >
          Tech Stack
        </div>
      </div> */}
      {/* <div className="flex justify-center mb-10">
        <div className="flex gap-4 p-2">
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
          <Tooltip title="css">
            <figure>
              <img className="w-10" src="/tailwind.png" alt="css logo" />
            </figure>
          </Tooltip>
          <Tooltip title="Node.Js">
            <figure>
              <img className="w-10" src="/node-js.png" alt="nodejs logo" />
            </figure>
          </Tooltip>
          <Tooltip title="SQL">
            <figure>
              <img className="w-10" src="/sql.png" alt="sql logo" />
            </figure>
          </Tooltip>
        </div>
      </div> */}
    </>
  );
}

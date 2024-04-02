import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";

export default function TabletHeader() {
  return (
    <>
      <div style={{ width: "100%" }} className=" w-full flex justify-center ">
        <section
          style={{ fontFamily: "Inter" }}
          className=" flex w-10/12 justify-self-center justify-between mt-10 "
        >
          <div className="drop-shadow-md text-2xl ">
            <div
              className="mb-3"
              style={{ fontWeight: "600", color: EColors.textGray2 }}
            >
              Hi, my name is
            </div>
            <div style={{ fontWeight: "600" }} className=" text-5xl mb-3">
              <span>Shawn </span>
              <span style={{ color: EColors.textGray }}> Montgomery</span>
            </div>
            <div
              className="w-1/2 "
              style={{ fontWeight: "600", color: EColors.textGray2 }}
            >
              I am a software engineer with a passion for excelling in my field.
            </div>
            <div
              className="text-2xl  "
              style={{ fontWeight: "600", color: EColors.textGray2 }}
            >
              shawnrmonty@gmail.com
            </div>
          </div>
          <div className=" self-end ">
            <div style={{ fontFamily: "Orbitron" }}>
              <div
                className="text-center text-xl"
                style={{ whiteSpace: "nowrap" }}
              >
                Tech Stack
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex gap-2 ">
                <Tooltip title="HTML">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/html.png"
                      alt="htmllogo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Javascript">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/js.png"
                      alt="javascriptlogo.png"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Typescript">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/typescript.png"
                      alt="typescript logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="React">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/4react.png"
                      alt="react logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Git">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/giticon.png"
                      alt="git logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="css">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/css-3.png"
                      alt="css logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="css">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/TailwindCSS.png"
                      alt="css logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Node.Js">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/nodeJS.png"
                      alt="nodejs logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="SQL">
                  <figure>
                    <img
                      className="w-14 drop-shadow-lg"
                      src="/sql2.png"
                      alt="sql logo"
                    />
                  </figure>
                </Tooltip>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

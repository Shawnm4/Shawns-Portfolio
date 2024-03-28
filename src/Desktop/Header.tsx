import { EColors } from "../Util/EColors";
import { Tooltip } from "antd";
import {
  LinkedinOutlined,
  MailOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import styles from "./Header.module.css";

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
            className="text-2xl mt-4 mb-8"
            style={{ fontWeight: "600", color: EColors.textGray2 }}
          >
            I am a software engineer with a passion for excelling in my field.
          </div>
          <div className="flex justify-center">
            <ul className="flex gap-20 text-4xl cursor-pointer">
              <li className={styles.githubIcon}>
                <a href="https://github.com/Shawnm4" target="_blank">
                  <GithubOutlined />
                </a>
              </li>
              <li className={styles.linkedinIcon}>
                <a
                  href="https://www.linkedin.com/in/shawn-montgomery-4760892a6/"
                  target="_blank"
                >
                  <LinkedinOutlined />
                </a>
              </li>
              <li className={styles.emailIcon}>
                <a href="mailto:shawnrmonty@gmail.com" target="_blank">
                  <MailOutlined />
                </a>
              </li>
            </ul>
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
        </div>
      </section>
    </>
  );
}

import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";

export default function CellPhoneSecondProject() {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
            fill={EColors.charlieprimary}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            fill={EColors.charlieprimary}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            fill={EColors.charlieprimary}
          ></path>
        </svg>
      </div>
      <div>
        <div className="text-4xl font-bold ml-2 mb-5">ChainSight</div>
        <div className="mb-5 underline text-2xl ml-2 font-bold">
          <a href="https://cryptotracker-blue-ten.vercel.app/" target="_blank">
            Visit Live Site
          </a>
        </div>
        <div className="underline text-2xl ml-2 mb-5 font-bold ">
          <a href="https://github.com/Shawnm4/Cryptotracker" target="_blank">
            View Code
          </a>
        </div>
        <div className="w-full flex justify-center   ">
          <video className=" w-11/12 rounded-lg shadow-2xl " controls>
            <source src="/lastcryptovid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          style={{ fontFamily: "Inter" }}
          className="text-center p-6 pb-0 mb-4 text-xl"
        >
          The goal of this project was to practice using Node.js and APIs. As
          the developer, I was in charge of creating CryptoPulse from start to
          finish. This included coming up with the idea, designing it, building
          it, and making sure the app helped users with useful information.
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="text-center pt-0 p-6 text-xl"
        >
          ChainSight is a user-friendly platform that provides real-time
          insights and analytics on the cryptocurrency market. Aimed at both
          novice and experienced investors, the app simplifies the complexities
          of cryptocurrency trading by offering intuitive monitoring tools, live
          market updates, and expert analysis.
        </div>
        <div
          className="text-2xl text-center"
          style={{ fontFamily: "Orbitron" }}
        >
          <div
            style={{ whiteSpace: "nowrap", fontWeight: "600" }}
            className="mr-3"
          >
            Tech Stack Used
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
}

import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";

export default function TabletThirdProject() {
  return (
    <div
      style={{ fontFamily: "Inter", position: "relative" }}
      className=" w-full"
    >
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={EColors.salemprimary}
          ></path>
        </svg>
      </div>
      <div style={{ backgroundColor: EColors.salemprimary }} className="w-full">
        <div className=" flex justify-center">
          <div className=" w-11/12 flex gap-10 justify-between">
            <div className="w-1/2">
              <div className="text-4xl font-bold mb-1 underline  ">
                <a
                  href="https://salemunionrzuachurch.vercel.app/"
                  target="_blank"
                >
                  Salem Union RZUA Church
                </a>
              </div>
              <div className="text-lg mb-5">
                This website was made for a local church. It was developed to
                share information about the church for people curious about the
                activities or interested in visiting.
              </div>
              <div className=" text-lg mb-5 hidden md:inline-block">
                <ul className="mb-20">
                  <li>
                    &#8226; I worked with the customer to leave them satisfied.
                  </li>
                  <li>
                    &#8226; I also wireframed and designed it from scratch.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 justify-self-end">
              <div className=" underline text-2xl ml-2 font-bold mb-2">
                <a
                  href="https://salemunionrzuachurch.vercel.app/"
                  target="_blank"
                >
                  Visit Live Site
                </a>
              </div>
              <div className="underline text-2xl ml-2  font-bold ">
                <a
                  href=" https://github.com/Shawnm4/salemunion"
                  target="_blank"
                >
                  View Code
                </a>
              </div>
              <div className=" justify-self-end mb-14 mt-6  ">
                <video className=" h-3/4 rounded-lg shadow-2xl " controls>
                  <source src="/LASTCHURCH.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div
                className="text-2xl text-center"
                style={{ fontFamily: "Orbitron" }}
              >
                <div
                  style={{ whiteSpace: "nowrap", fontWeight: "600" }}
                  className="mr-3 "
                >
                  Tech Stack Used
                </div>
              </div>
              <div className="flex gap-4 p-2">
                <Tooltip title="Typescript">
                  <figure>
                    <img
                      className="w-10 drop-shadow-lg"
                      src="/typescript.png"
                      alt="typescript logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="React">
                  <figure>
                    <img
                      className="w-10 drop-shadow-lg"
                      src="/4react.png"
                      alt="react logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Git">
                  <figure>
                    <img
                      className="w-10 drop-shadow-lg"
                      src="/2git.png"
                      alt="git logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="CSS">
                  <figure>
                    <img
                      className="w-10 drop-shadow-lg"
                      src="/css-3.png"
                      alt="css logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="TailWindCSS">
                  <figure>
                    <img
                      className="w-10 drop-shadow-lg"
                      src="/TailwindCSS.png"
                      alt="css logo"
                    />
                  </figure>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1711290880">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill={EColors.salemprimary}
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
            fill={EColors.salemprimary}
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
            fill={EColors.salemprimary}
          ></path>
        </svg>
      </div>
    </div>
  );
}

import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";
import { Image } from "antd";
export default function FirstProject() {
  function mouseEnter(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.color = "#339af0";
    e.currentTarget.style.textDecoration = "underline";
  }
  function mouseLeave(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.color = "";
  }
  return (
    <div style={{ position: "relative" }} className="mt-32 ">
      <div>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={EColors.charlieprimary}
          ></path>
        </svg>
      </div>

      <section
        className=" h-full
        "
        style={{
          backgroundColor: EColors.charlieprimary,
        }}
      >
        <div
          style={{ fontFamily: "Inter" }}
          className="flex ml-40 justify-between  gap-36  "
        >
          <div className="w-1/2">
            <div
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
              className="text-6xl font-bold mb-5 cursor-pointer underline "
            >
              <a
                href="https://charlie-glass-admin.vercel.app/login"
                target="_blank"
              >
                Charlie Glass Admin
              </a>
            </div>
            <div className="text-xl mb-5">
              This app was made for Charlie Glass to manage invoices, quotes,
              and to see profits.
            </div>
            <ul className="mb-20 text-lg">
              <li className="mb-2">
                &#8226; <strong>Co-designed</strong> and
                <strong> developed</strong> a business web app,
                <strong> reducing admin workload by 30%.</strong>
              </li>
              <li className="mb-2">
                &#8226; <strong>Collaborated</strong> using
                <strong> Git </strong>
                for <strong>version control,</strong> managed{" "}
                <strong>merge requests, </strong>
                and conducted <strong>code reviews</strong>.
              </li>
              <li className="mb-2">
                &#8226; Developed a <strong>responsive UI</strong> with
                <strong>Tailwind CSS </strong>
                and <strong>Ant Design</strong>; implemented
                <strong> React Hooks</strong> and <strong>React Query </strong>
                for efficient <strong>data fetching</strong>.
              </li>
              <li className="mb-2">
                &#8226; Built full <strong>CRUD functionality</strong> with
                <strong>SQL</strong>,<strong> React.js</strong>, and
                <strong> Node.js</strong>.
              </li>
              <li>
                &#8226; Managed application state via
                <strong> Context API</strong>.
              </li>
            </ul>

            <div className="flex items-end mb-2 ">
              <div className="text-2xl" style={{ fontFamily: "Orbitron" }}>
                <div className="mr-4">Tech Stack Used</div>
              </div>
              <div className="flex gap-4 ">
                <Tooltip title="Typescript">
                  <figure>
                    <img
                      className="w-10 drop-shadow-xl"
                      src="/typescript.png"
                      alt="typescript logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="React">
                  <figure>
                    <img
                      className="w-10 drop-shadow-xl"
                      src="/4react.png"
                      alt="react logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Git">
                  <figure>
                    <img
                      className="w-10 drop-shadow-xl"
                      src="/giticon.png"
                      alt="git logo"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="TailWind Css">
                  <figure>
                    <img
                      className="w-10 self-end drop-shadow-xl "
                      src="/TailwindCSS.png"
                      alt="tail wind log"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="Node.Js">
                  <figure>
                    <img
                      className="w-10 self-end  drop-shadow-xl"
                      src="/nodeJS.png"
                      alt="tail wind log"
                    />
                  </figure>
                </Tooltip>
                <Tooltip title="SQL">
                  <figure>
                    <img
                      className="w-10 self-end drop-shadow-xl"
                      src="/sql2.png"
                      alt="tail wind log"
                    />
                  </figure>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="  mt-14 w-1/2  ">
            <div className="flex gap-20">
              <div
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="mb-2 underline  text-2xl  "
              >
                <a
                  href="https://charlie-glass-admin.vercel.app/login"
                  target="_blank"
                >
                  Visit Live Site &darr;
                </a>
              </div>

              <div
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="underline text-2xl "
              >
                <a
                  href="https://github.com/nsikan-na/charlie-glass-admin"
                  target="_blank"
                >
                  View Code &darr;
                </a>
              </div>
            </div>

            <div className="  rounded-lg  ">
              <Image
                className="rounded-lg shadow-2xl "
                width={700}
                preview={{
                  imageRender: () => (
                    <video
                      muted
                      width="60%"
                      controls
                      src="/actualnewcharlieglass.mp4"
                    />
                  ),
                  toolbarRender: () => null,
                }}
                src="/charlieglass.png"
              />
            </div>
            <div className="text-xl font-bold text-center">
              Click to see video
            </div>
          </div>
          {/* <div className=" justify-self-end mt-14  ">
            <video className=" h-3/4 rounded-lg shadow-2xl " controls>
              <source src="/actualnewcharlieglass.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div> */}
        </div>
      </section>
    </div>
  );
}

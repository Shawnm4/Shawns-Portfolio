import { Tooltip } from "antd";

import { Image } from "antd";

export default function FourthProject() {
  function mouseEnter(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.color = "#339af0";
    e.currentTarget.style.textDecoration = "underline";
  }
  function mouseLeave(e: React.MouseEvent<HTMLElement>) {
    e.currentTarget.style.color = "";
  }

  return (
    <div className="mb-20" style={{ position: "relative" }}>
      <div>
        <section
          className=" h-full
        "
          style={{
            backgroundColor: " white",
          }}
        >
          <div
            style={{ fontFamily: "Inter" }}
            className="flex ml-32  gap-56 justify-between     "
          >
            <div className="  mt-14 w-1/2  ">
              <div className="flex gap-20  ">
                <div
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="mb-2 underline text-2xl"
                >
                  <a
                    href="https://salemunionrzuachurch.vercel.app/"
                    target="_blank"
                  >
                    Visit Live Site &darr;
                  </a>
                </div>
                <div
                  onMouseEnter={mouseEnter}
                  onMouseLeave={mouseLeave}
                  className="underline text-2xl"
                >
                  <a
                    href="https://github.com/Shawnm4/salemunion"
                    target="_blank"
                  >
                    View Code &darr;
                  </a>
                </div>
              </div>
              <div className="  rounded-lg  ">
                <Image
                  className="rounded-lg shadow-2xl"
                  width={700}
                  preview={{
                    imageRender: () => (
                      <video muted width="60%" controls src="/LASTCHURCH.mp4" />
                    ),
                    toolbarRender: () => null,
                  }}
                  src="/salem.png"
                />
              </div>
              <div className="text-xl font-bold text-center ">
                Click to see video
              </div>
            </div>

            <div className="w-1/2">
              <div
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                className="text-6xl font-bold mb-5 mt-8 underline cursor-pointer "
              >
                <a
                  href="https://salemunionrzuachurch.vercel.app/"
                  target="_blank"
                >
                  Salem Union RZUA
                </a>
              </div>
              <div className="text-lg mb-5 mr-10">
                This website was made for a local church. It was developed to
                share information about the church for people curious about the
                activities or interested in visiting.
              </div>
              <ul className="mb-20">
                <li>
                  &#8226; I worked with the customer to leave them satisfied.
                </li>
                <li></li>
                <li>&#8226; I also wireframed and designed it from scratch.</li>
              </ul>

              <div className="flex items-end mb-2">
                <div className="text-2xl" style={{ fontFamily: "Orbitron" }}>
                  <div className="mr-4">Tech Stack Used</div>
                </div>
                <div className="flex gap-4">
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
                        src="/giticon.png"
                        alt="git logo"
                      />
                    </figure>
                  </Tooltip>
                  <Tooltip title="TailWind Css">
                    <figure>
                      <img
                        className="w-10 self-end drop-shadow-lg "
                        src="/TailwindCSS.png"
                        alt="tail wind log"
                      />
                    </figure>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";

export default function CellPhoneThirdProject() {
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill={EColors.salemprimary}
          ></path>
        </svg>
      </div>
      <div style={{ backgroundColor: EColors.salemprimary }}>
        <div className="text-4xl font-bold ml-2 mb-5">
          Salem Union RZUA Church
        </div>
        <div className="mb-5 underline text-2xl ml-2 font-bold">
          <a href="https://salemunionrzuachurch.vercel.app/" target="_blank">
            Visit Live Site &darr;
          </a>
        </div>
        <div className="w-full flex justify-center   ">
          <video className=" w-11/12 rounded-lg shadow-2xl " controls>
            <source src="/salemportfolio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="underline text-2xl ml-2 mt-5 font-bold ">
          <a href=" https://github.com/Shawnm4/salemunion" target="_blank">
            View Code &uarr;
          </a>
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="text-center p-6 pb-0 mb-4 text-xl"
        >
          I had the rewarding opportunity to design and develop a website for a
          local church, aiming to create a digital space that reflects the
          church's welcoming community and spiritual mission. The goal was to
          provide an accessible platform where congregation members and visitors
          could find information about church services, events, programs, and
          community outreach initiatives.
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="text-center pt-0 p-6 text-xl"
        >
          As the sole developer working on the church website, I handled
          everything from start to end. First, I talked with the church leaders
          to understand what they wanted for their website. Then, I designed a
          website that looks good and is easy for everyone to use. Also, I made
          sure the website works well on all devices, like smartphones, tablets,
          and computers.
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

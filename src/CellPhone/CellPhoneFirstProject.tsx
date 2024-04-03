import { Tooltip } from "antd";
import { EColors } from "../Util/EColors";

export default function CellPhoneFirstProject() {
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
            fill={EColors.charlieprimary}
          ></path>
        </svg>
      </div>
      <div style={{ backgroundColor: EColors.charlieprimary }}>
        <div className="text-4xl font-bold ml-2 mb-5 underline">
          <a
            href="https://charlie-glass-admin.vercel.app/login"
            target="_blank"
          >
            Charlie Glass Admin
          </a>
        </div>
        <div className="mb-2 underline text-2xl ml-2 font-bold">
          <a
            href="https://charlie-glass-admin.vercel.app/login"
            target="_blank"
          >
            Visit Live Site
          </a>
        </div>
        <div className="mb-2 underline text-2xl ml-2  font-bold ">
          <a
            href="https://github.com/nsikan-na/charlie-glass-admin"
            target="_blank"
          >
            View Code
          </a>
        </div>
        <div className="w-full flex justify-center   ">
          <video className=" w-11/12 rounded-lg shadow-2xl " controls>
            <source src="/actualnewcharlieglass.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          style={{ fontFamily: "Inter" }}
          className="text-center p-6 pb-0 mb-4 text-xl"
        >
          This app was made for Charlie Glass to manage invoices, quotes, and to
          see profits
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="text-center pt-0 p-6 text-xl"
        >
          <ul className="">
            <li className="mb-4">
              &#8226; I collaborated with a team of other developers.
            </li>
            <li className="mb-4">
              &#8226; Used git version control, merge request, and went through
              rounds of code reviews.
            </li>
            <li className="mb-4">&#8226;Used wireframing.</li>
            <li className="mb-4">&#8226;Created the responsive design.</li>
            <li className="mb-4">
              &#8226;Gained experience using CRUD actions.
            </li>
          </ul>
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
          <Tooltip title="CSS">
            <figure>
              <img
                className="w-10 drop-shadow-xl"
                src="/css-3.png"
                alt="css logo"
              />
            </figure>
          </Tooltip>
          <Tooltip title="TailWindCSS">
            <figure>
              <img
                className="w-10 drop-shadow-xl"
                src="/TailwindCSS.png"
                alt="css logo"
              />
            </figure>
          </Tooltip>
          <Tooltip title="Node.Js">
            <figure>
              <img
                className="w-10 drop-shadow-xl"
                src="/nodeJS.png"
                alt="nodejs logo"
              />
            </figure>
          </Tooltip>
          <Tooltip title="SQL">
            <figure>
              <img className="w-10" src="/sql2.png" alt="sql logo" />
            </figure>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

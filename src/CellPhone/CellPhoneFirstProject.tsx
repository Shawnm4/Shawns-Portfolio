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
        <div className="text-4xl font-bold ml-2 mb-5">Charlie Glass Admin</div>
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
          The goal of this project wat to practice basic CRUD actions. This was
          my first project for a real client. My colleague and I worked together
          to create a special web app for a business that needed help managing
          their money. Our main aim was to make a tool that makes it easier to
          keep an eye on finances and also helps with making and handling quotes
          and invoices. This app is really important for businesses that want to
          get better at understanding their finances and working more
          efficiently. I focused on designing the part of the app that users see
          and interact with, making sure it was easy and pleasant to use.
        </div>
        <div
          style={{ fontFamily: "Inter" }}
          className="text-center pt-0 p-6 text-xl"
        >
          As a co-developer and designer on this project, I had many roles. I
          worked closely with our client to really understand what they needed.
          This helped us make sure our app would help their business the way
          they wanted. I focused on making the part of the app that users see
          very user-friendly. I also helped set up the system that manages data
          in the background. Part of my job was to create features that allow
          users to make, see, download, and print quotes and invoices easily.
          Plus, I helped include a special dashboard in the app. This dashboard
          lets businesses check on their money and how well they are doing at
          any time.
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
    </div>
  );
}

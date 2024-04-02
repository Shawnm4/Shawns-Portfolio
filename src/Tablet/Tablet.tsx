import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import TabletFirstProject from "./TabletFirstProject";
import TabletHeader from "./TabletHeader";
import TabletSecondProject from "./TabletSecondProject";
import TabletThirdProject from "./TabletThirdProject";

export default function Tablet() {
  return (
    <div className="relative">
      <TabletHeader />
      <div className="w-full">
        <TabletFirstProject />
      </div>
      <TabletSecondProject />
      <TabletThirdProject />
      <div className="flex text-4xl gap-14 bottom-4 left-10 mr-10  fixed cursor-pointer ">
        <a href="https://github.com/Shawnm4" target="_blank">
          <GithubOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/shawn-montgomery-4760892a6/"
          target="_blank"
        >
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
}

import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import FirstProject from "./FirstProject";
import Header from "./Header";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

export default function Desktop() {
  return (
    <div className="relative">
      <Header />
      <FirstProject />
      <SecondProject />
      <ThirdProject />
      <div className="flex text-5xl gap-20 bottom-10 left-10 mr-10  fixed cursor-pointer ">
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

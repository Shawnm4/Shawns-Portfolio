import TabletFirstProject from "./TabletFirstProject";
import TabletHeader from "./TabletHeader";
import TabletSecondProject from "./TabletSecondProject";
import TabletThirdProject from "./TabletThirdProject";

export default function Tablet() {
  return (
    <>
      <TabletHeader />
      <div className="w-full">
        <TabletFirstProject />
      </div>
      <TabletSecondProject />
      <TabletThirdProject />
    </>
  );
}

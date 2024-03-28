import CellPhone from "./CellPhone/CellPhone";
import Desktop from "./Desktop/Desktop";
import Tablet from "./Tablet/Tablet";

export default function App() {
  return (
    <>
      <div className="md:hidden">
        <CellPhone />
      </div>
      <div className="hidden 2xl:hidden md:inline-block ">
        <Tablet />
      </div>
      <div className="hidden 2xl:inline">
        <Desktop />
      </div>
    </>
  );
}

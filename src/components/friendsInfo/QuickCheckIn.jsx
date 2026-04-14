import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";

const QuickCheckIn = () => {
  return (
    <div className="shadow-md rounded-lg p-4">

      <h3 className="font-semibold mb-3">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">

      <button className="shadow p-3 rounded flex flex-col items-center justify-center flex-1">
      <MdOutlineWifiCalling3 />
     <span>Call</span>
     </button>

        <button className="shadow p-3 rounded flex flex-col items-center justify-center flex-1">
      <MdOutlineTextsms />
     <span>Text</span>
     </button>

        <button className="shadow p-3 rounded flex flex-col items-center justify-center flex-1">
      <IoVideocamOutline />
     <span>Video</span>
     </button>

      </div>

    </div>
  );
};

export default QuickCheckIn;
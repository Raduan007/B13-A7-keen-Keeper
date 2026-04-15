import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useCheckIn } from "../../ui/CheckInContext";

const QuickCheckIn = ({ friend }) => {
  const { addCheckIn } = useCheckIn();

  return (
    <div className="shadow-md rounded-lg p-4 bg-white">

      <h3 className="font-semibold mb-3">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">

        <button
          onClick={() => addCheckIn("call", friend)}
          className="shadow p-3 rounded flex flex-col items-center justify-center">
          <MdOutlineWifiCalling3  />
          <span>Call</span>
        </button>

        <button
          onClick={() => addCheckIn("text", friend)}
          className="shadow p-3 rounded flex flex-col items-center justify-center">
          <MdOutlineTextsms  />
          <span>Text</span>
        </button>

        <button
          onClick={() => addCheckIn("video", friend)}
          className="shadow p-3 rounded flex flex-col items-center justify-center">
          <IoVideocamOutline  />
          <span>Video</span>
        </button>

      </div>

    </div>
  );
};

export default QuickCheckIn;
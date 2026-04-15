import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useCheckIn } from "../../ui/CheckInContext";

const QuickCheckIn = () => {
  const { addCheckIn } = useCheckIn();

  return (
    <div className="shadow-md rounded-lg p-4 bg-white">

      <h3 className="font-semibold mb-3">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">

        {/* Call */}
        <button
          onClick={() => addCheckIn("call")}
          className="shadow p-3 rounded flex flex-col items-center justify-center"
        >
          <MdOutlineWifiCalling3 size={22} />
          <span>Call</span>
        </button>

        {/* Text */}
        <button
          onClick={() => addCheckIn("text")}
          className="shadow p-3 rounded flex flex-col items-center justify-center"
        >
          <MdOutlineTextsms size={22} />
          <span>Text</span>
        </button>

        {/* Video */}
        <button
          onClick={() => addCheckIn("video")}
          className="shadow p-3 rounded flex flex-col items-center justify-center"
        >
          <IoVideocamOutline size={22} />
          <span>Video</span>
        </button>

      </div>

    </div>
  );
};

export default QuickCheckIn;
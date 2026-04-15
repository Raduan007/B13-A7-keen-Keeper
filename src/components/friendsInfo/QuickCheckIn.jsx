import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useCheckIn } from "../../ui/CheckInContext";
import { toast } from "react-toastify";

const QuickCheckIn = ({ friend }) => {
  const { addCheckIn } = useCheckIn();

  return (
    <div className="shadow-md rounded-lg p-4 bg-white">

      <h3 className="font-semibold mb-3">
        Quick Check-In
      </h3>

      <div className="grid grid-cols-3 gap-3">

        <button
         onClick={() => {
        addCheckIn("call", friend);
       toast.success(`Call with ${friend?.name}`);
      }}
          className="shadow p-3 rounded flex flex-col items-center justify-center transition duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
        >
          <MdOutlineWifiCalling3 />
          <span>Call</span>
        </button>

        <button
          onClick={() => {
            addCheckIn("text", friend);
            toast.info(`Text with ${friend?.name}`); 
          }}
          className="shadow p-3 rounded flex flex-col items-center justify-center transition duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
        >
          <MdOutlineTextsms />
          <span>Text</span>
        </button>

        <button
          onClick={() => {
            addCheckIn("video", friend);
            toast.success(`Video with ${friend?.name}`); 
          }}
          className="shadow p-3 rounded flex flex-col items-center justify-center transition duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
        >
          <IoVideocamOutline />
          <span>Video</span>
        </button>

      </div>

    </div>
  );
};

export default QuickCheckIn;
import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useCheckIn } from "../../ui/CheckInContext";

const getIcon = (type) => {
  switch (type) {
    case "call":
      return <MdOutlineWifiCalling3 size={30}  />;
    case "text":
      return <MdOutlineTextsms  size={30} />;
    case "video":
      return <IoVideocamOutline size={30}  />;
    default:
      return null;
  }
};

const TimelinePage = () => {
  const { timeline } = useCheckIn();

  return (
    <div className="max-w-xl mx-auto p-4">

      <h2 className="text-2xl font-semibold mb-4">
        Timeline
      </h2>

      <div className="space-y-3">

        {timeline.length === 0 && (
          <div className="text-gray-500">
            No activities yet
          </div>
        )}

        {timeline.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-start gap-3"
          >
            <div className="text-gray-700 mt-1">
              {getIcon(item.type)}
            </div>

            <div>
              <p className="font-medium text-gray-800">
                {item.type} with {item.contactName}
              </p>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default TimelinePage;
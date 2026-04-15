import React, { useState } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms, MdOutlineWifiCalling3 } from "react-icons/md";
import { useCheckIn } from "../../ui/CheckInContext";

const getIcon = (type) => {
  switch (type) {
    case "call":
      return <MdOutlineWifiCalling3 size={22} />;
    case "text":
      return <MdOutlineTextsms size={22} />;
    case "video":
      return <IoVideocamOutline size={22} />;
    default:
      return null;
  }
};

const TimelinePage = () => {
  const { timeline } = useCheckIn();


  const [filter, setFilter] = useState("all");


  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type === filter);

  return (
    <div className="max-w-xl mx-auto p-4">

      <h2 className="text-2xl font-semibold mb-4">
        Timeline
      </h2>


      <div className="mb-4">

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className=" w-1/2 p-3 shadow rounded-lg text-gray-600 bg-gray-100 transition duration-200 hover:shadow-xl hover:-translate-y-1">

          <option value="all">Filter timeline</option>
           <option value="text">Text</option>
          <option value="call">Call</option>
          <option value="video">Video</option>
        </select>

      </div> 

   

      <div className="space-y-3">

        {filteredTimeline.length === 0 && (
         <div className="text-gray-500 text-center text-lg font-medium py-10 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
         No activities yet
       </div>
        )}

        {filteredTimeline.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-start gap-3 transition duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-gray-700 mt-1">
              {getIcon(item.type)}
            </div>

            <div>
              <p className="font-medium text-gray-800">
                {item.type} with {item.contactName || "Friend"}
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
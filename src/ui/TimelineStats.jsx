import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useCheckIn } from "./CheckInContext";


const TimelineStats = () => {
  const { timeline } = useCheckIn();


   if (timeline.length === 0) {
    return (
      <div className="text-gray-500 text-center text-lg font-medium py-10 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
         No data found!
       </div>
    );
  }

  const callCount = timeline.filter(
    (item) => item.type === "call").length;

  const textCount = timeline.filter(
    (item) => item.type === "text" ).length;

  const videoCount = timeline.filter(
    (item) => item.type === "video").length;

  const data = [
    { name: "Call", value: callCount, fill: "#22c55e" },
    { name: "Text", value: textCount, fill: "#3b82f6" },
    { name: "Video", value: videoCount, fill: "#eab308" },
  ];
  console.log("timeline:", timeline);
  return (
    <div className="w-full max-w-md mx-auto bg-white p-4 rounded-xl shadow">
     <div className="text-sm text-[#244D3f] font-medium mb-2">
      By Interaction Type</div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            paddingAngle={5}
            cornerRadius={10}
            dataKey="value"
          />
        
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TimelineStats;
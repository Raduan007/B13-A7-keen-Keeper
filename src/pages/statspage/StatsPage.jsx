import TimelineStats from "../../ui/TimelineStats";


const StatsPage = () => {
  return (
    <div className="max-w-xl mx-auto p-4">

      <h2 className="text-2xl font-semibold mb-4">
       Friendship Analytics 
      </h2>
      
      <div>
        <TimelineStats />

      </div>
    </div>
  );
};

export default StatsPage;
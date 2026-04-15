const StatsCards = ({ friend }) => {
  return (
    <div className="grid grid-cols-3 gap-4">

      <div className="shadow-md rounded-lg p-4 text-center transition duration-200 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-xl font-semibold">
          {friend.days_since_contact}
        </h2>
        <p className="text-sm text-gray-500">
          Days Since Contact
        </p>
      </div>

      <div className="shadow-md rounded-lg p-4 text-center transition duration-200 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-xl font-semibold">
          {friend.goal}
        </h2>
        <p className="text-sm text-gray-500">
          Goal (Days)
        </p>
      </div>

      <div className="shadow-md rounded-lg p-4 text-center transition duration-200 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-xl font-semibold">
          {friend.next_due_date}
        </h2>
        <p className="text-sm text-gray-500">
          Next Due
        </p>
      </div>

    </div>
  );
};

export default StatsCards;
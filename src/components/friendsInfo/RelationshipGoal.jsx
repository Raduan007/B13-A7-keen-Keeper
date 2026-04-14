const RelationshipGoal = ({ friend }) => {
  return (
    <div className="shadow-md rounded-lg p-4">

      <div className="flex justify-between items-center">

        <h3 className="font-semibold">
          Relationship Goal
        </h3>

        <button className="border px-3 py-1 rounded text-sm">
          Edit
        </button>

      </div>

      <p className="text-sm text-gray-500 mt-2">
        Connect every {friend.goal} days
      </p>

    </div>
  );
};

export default RelationshipGoal;
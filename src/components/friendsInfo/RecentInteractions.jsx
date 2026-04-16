const RecentInteractions = () => {
  return (
    <div className="shadow-md rounded-lg p-4 transition duration-200 hover:shadow-xl hover:-translate-y-1">

      <div className="flex justify-between ">

        <h3 className="font-semibold text-[#244D3F]">
          Recent Interactions
        </h3>

        <button className="border px-2 py-1 rounded text-sm">
          Full History
        </button>

      </div>

      <div className="mt-3 space-y-3">

        <div className="flex justify-between text-sm">
          <span>Text — Asked for career advice</span>
          <span className="text-gray-500">
            Jan 28, 2026
          </span>
        </div>

      </div>

    </div>
  );
};

export default RecentInteractions;
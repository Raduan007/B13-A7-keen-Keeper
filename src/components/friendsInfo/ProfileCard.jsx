const ProfileCard = ({ friend }) => {
  return (
    <div className="shadow-md rounded-lg p-6 text-center">

      <img
        src={friend.picture}
        className="w-20 h-20 rounded-full mx-auto mb-3"
      />

      <h2 className="font-semibold text-lg">
        {friend.name}
      </h2>

      <span className="bg-[#EF4444] text-white text-xs px-3 py-1 rounded-full">
        {friend.status}
      </span>

      <div className="flex justify-center gap-2 mt-2">
        {friend.tags.map((tag, i) => (
          <span
            key={i}
            className="bg-[#CBFADB] text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-3 italic">
        "{friend.bio}"
      </p>

    </div>
  );
};

export default ProfileCard;
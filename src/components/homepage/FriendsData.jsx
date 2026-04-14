import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { RingLoader } from 'react-spinners';

const FriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/friends.json'); // ✅ correct path
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error('Error fetching friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RingLoader color="#244D3F" />
      </div>
    );
  }

  return (
    <div className="mx-auto pt-12 pb-20">
      <h4 className="px-20 font-semibold pb-6">Your Friends</h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-20">
        {friends.map((friend) => (
          <Link
            key={friend.id}
            to={`/friends/${friend.id}`}
            className="shadow-md flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition"
          >
            {/* Avatar */}
            <img
              src={friend.picture}
              className="w-16 h-16 rounded-full object-cover pb-2"
              alt={friend.name}
            />

            {/* Name */}
            <h2 className="font-semibold text-base pb-2">
              {friend.name}
            </h2>

            {/* Days */}
            <p className="text-sm opacity-80 pb-2">
              {friend.days_since_contact}d ago
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pb-2">
              {Array.isArray(friend.tags) ? (
                friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#CBFADB] text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {friend.tags}
                </span>
              )}
            </div>

            {/* Status */}
            <span
              className={`text-xs px-4 py-1 rounded-full font-medium text-white ${
                friend.status === 'On-Track'
                  ? 'bg-[#244D3F]'
                  : friend.status === 'Almost Due'
                  ? 'bg-[#EFAD44]'
                  : friend.status === 'Overdue'
                  ? 'bg-[#EF4444]'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {friend.status}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FriendsData;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RingLoader } from 'react-spinners';
import ProfileCard from '../../components/friendsInfo/ProfileCard';
import StatsCards from '../../components/friendsInfo/StatsCards';
import RelationshipGoal from '../../components/friendsInfo/RelationshipGoal';
import QuickCheckIn from '../../components/friendsInfo/QuickCheckIn';
import RecentInteractions from '../../components/friendsInfo/RecentInteractions';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ActionButton from '../../components/friendsInfo/ActionButton';

const FriendsDetails = () => {
    const {id} = useParams();
    console.log(id, 'id');

    

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const expectedFriend = friends.find((app) => app.id == id);

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await fetch('/public/friends.json');
            const data = await res.json();
            console.log(data);
            setFriends(data);
            setLoading(false);
        };
        fetchData();
    },[] );
        console.log(friends,'friend');
        console.log(expectedFriend, 'helo');

    return (
    <div>
        {loading ? (
            <div className="flex justify-center py-10">
                <RingLoader color="#244D3F" size={60} />
            </div>
        ) : expectedFriend ? (
            <div className="max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Left */}
                <div>
                    <ProfileCard friend={expectedFriend} />
                <ActionButton/>
                </div>

                {/* Right */}
                <div className="md:col-span-2 space-y-4">

                    <StatsCards friend={expectedFriend} />

                    <RelationshipGoal friend={expectedFriend} />

                    <QuickCheckIn />

                    <RecentInteractions />

                </div>

            </div>
        ) : (
           <NotFoundPage/>
        )}
    </div>
);}

export default FriendsDetails;
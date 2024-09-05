import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Loader2 } from 'lucide-react';

function Notification({ item, isNotification, setIsNotification }) {
    const { likeNotification, isNewNotification } = useSelector(store => store.realTimeNotification);
    const [loading, setLoading] = useState(false);

    return (
        <>
            {
                item.text === "Notifications" && (
                    <Popover open={isNotification}>
                        <PopoverTrigger>
                            {isNewNotification.length > 0 && (
                                <Button size='icon' className="rounded-full h-5 w-5 bg-red-600 hover:bg-red-600 absolute bottom-6 left-6">{isNewNotification.length}</Button>
                            )}
                        </PopoverTrigger>
                        <PopoverContent onInteractOutside={() => setIsNotification(false)}>
                            {loading ?
                                <Loader2 className='m-auto h-10 w-4 animate-spin' />
                                :
                                <div>
                                    {
                                        likeNotification.length === 0 ? (<p>No new notification</p>) : (
                                            likeNotification.map((notification) => {
                                                return (
                                                    <div key={notification.userDetails?.userId} className='flex items-center gap-2 my-2'>
                                                        <Link to={`/profile/${notification.userDetails?._id}`}>
                                                            <Avatar>
                                                                <AvatarImage src={notification.userDetails?.profilePicture} />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </Link>
                                                        <p className='text-sm'><Link to={`/profile/${notification.userDetails?._id}`}><span className='font-bold'>{notification.userDetails?.username}</span></Link> liked your post</p>
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                </div>
                            }
                        </PopoverContent>
                    </Popover>
                )
            }
        </>
    )
}

export default Notification
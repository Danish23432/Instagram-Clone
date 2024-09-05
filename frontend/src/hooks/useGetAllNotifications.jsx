import { setLikeNotification } from '@/redux/rtnSlice';
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetAllNotifications() {
    const dispatch = useDispatch();

    return (
        useEffect(() => {
            const fetchNotifications = async () => {
                // dispatch(setLikeNotification(res.data.messages));
                try {
                    const res = await axios.get('http://localhost:8000/api/v1/user/notifications', {
                        withCredentials: true
                    });
                    // if (res.data.success) {
                    //     dispatch(setLikeNotification(res.data.messages));
                    // }
                    console.log(res.data);
                } catch (error) {
                    console.log(error)
                }
            }
            fetchNotifications();
        }, []
        )
    )
}

export default useGetAllNotifications;
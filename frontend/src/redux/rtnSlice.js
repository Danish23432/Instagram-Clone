import { createSlice } from "@reduxjs/toolkit";

const rtnSlice = createSlice({
    name: 'realTimeNotification',
    initialState: {
        likeNotification: [],
        isNewNotification: []
    },
    reducers: {
        setLikeNotification: (state, action) => {
            if (action.payload.type === 'like') {
                state.likeNotification.push(action.payload);
                state.isNewNotification.push(action.payload);
            }
            else if (action.payload.type === 'dislike') {
                state.likeNotification = state.likeNotification.filter((item) => item.userId !== action.payload.userId);
                state.isNewNotification = state.isNewNotification?.filter((item) => item.userId !== action.payload.userId);
            }
        },
        clearNewNotifications: (state) => {
            state.isNewNotification = [];
        },
        clearNotifications: (state) => {
            state.likeNotification = [];
        }
    }
});
export const { setLikeNotification, clearNewNotifications, clearNotifications } = rtnSlice.actions;
export default rtnSlice.reducer;
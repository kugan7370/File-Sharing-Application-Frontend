import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    AllUsers: null,
    error: false
}

const AllUserSlicer = createSlice({
    name: 'allUser',
    initialState,
    reducers: {
        All_user_request: (state) => {
            state.loading = true;
            state.AllUsers = null;
            state.error = false;
        },
        All_user_Success: (state, actions) => {
            state.loading = false;
            state.AllUsers = actions.payload;
            state.error = false;
        },
        All_user_Failed: (state) => {
            state.loading = false;
            state.AllUsers = null;
            state.error = true;

        },
    }
});

export const { All_user_request, All_user_Success, All_user_Failed } = AllUserSlicer.actions

export default AllUserSlicer.reducer
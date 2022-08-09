import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    sharedFiles: null,
    error: false
}

const SharedFileSlicer = createSlice({
    name: 'sharedFile',
    initialState,
    reducers: {
        get_shared_request: (state) => {
            state.loading = true;
            state.sharedFiles = null;
            state.error = false;
        },
        get_shared_Success: (state, actions) => {
            state.loading = false;
            state.sharedFiles = actions.payload;
            state.error = false;
        },
        get_shared_Failed: (state) => {
            state.loading = false;
            state.sharedFiles = null;
            state.error = true;

        },
    }
});

export const { get_shared_request, get_shared_Success, get_shared_Failed } = SharedFileSlicer.actions

export default SharedFileSlicer.reducer
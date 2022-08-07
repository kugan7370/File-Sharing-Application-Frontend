import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    Files: null,
    error: false
}

const FileSlicer = createSlice({
    name: 'file',
    initialState,
    reducers: {
        get_File_request: (state) => {
            state.loading = true;
            state.Files = null;
            state.error = false;
        },
        get_File_Success: (state, actions) => {
            state.loading = false;
            state.Files = actions.payload;
            state.error = false;
        },
        get_File_Failed: (state) => {
            state.loading = false;
            state.Files = null;
            state.error = true;

        }
    }
});

export const { get_File_request, get_File_Success, get_File_Failed } = FileSlicer.actions

export default FileSlicer.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";

export const getMe = createAsyncThunk('user/getMe', async (params, thunkApi) => {
    // thunkApi.dispatch(...): you can dispatch action of other slice
    const currentUser = await userApi.getMe();
    return currentUser;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        loading: false,
        error: ''
    },
    reducers: {

    },
    extraReducers:
    {
        [getMe.pending]: (state) => {
            state.loading = true;
        },
        [getMe.rejected]: (state) => {
            state.loading = false;
            state.error = '';
        },
        [getMe.fulfilled]: (state, action) => {
            state.loading = false;
            state.current = action.payload;
        }
    }
});

const { reducer } = userSlice;
export default reducer;
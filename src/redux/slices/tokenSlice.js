import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    accessToken : localStorage.getItem("access_token") ?? ""
}

const tokenSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
            setAccessToken: (state, action) => {
            const { accessToken } = action.payload;
            localStorage.setItem("access_token", accessToken);
            state.accessToken = accessToken;
        },
            setRemoveAccessToken: (state) => {
            state.accessToken = "";
            localStorage.removeItem("access_token");
        },
    }
})

export const { setAccessToken, setRemoveAccessToken } = tokenSlice.actions;

export default tokenSlice.reducer;
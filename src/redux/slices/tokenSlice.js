import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    token:  window.location.hash
    .substring(1, window.location.hash.length - 1)
    .split("&")[0]
    .split("=")[1]
}

const tokenSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {}
})

export default tokenSlice.reducer;
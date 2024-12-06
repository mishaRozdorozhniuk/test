import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "entities/User/types/user";

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export const {actions: userAction} = userSlice;
export const {reducer: userReducer} = userSlice;

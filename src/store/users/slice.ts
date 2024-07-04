import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Miguel Angel",
		email: "david@gmail.com",
		github: "midudev",
	},
	{
		id: "2",
		name: "Maykel Jordan",
		email: "michael@gmail.com",
		github: "maykeldev",
	},
	{
		id: "3",
		name: "Jerick Toro",
		email: "jerick@gmail.com",
		github: "JerickTwO",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;

import { UserId, deletedUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: UserId) => {
		dispatch(deletedUserById(id));
	};
	return {
		removeUser,
	};
};

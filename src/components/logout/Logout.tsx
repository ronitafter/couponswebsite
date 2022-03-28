import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import authService from "../utils/AuthService";
import notify, { SccMsg } from "../utils/Notify";
import "./Logout.css";

function Logout(): JSX.Element {

	const navigate = useNavigate();

	useEffect(() => {
		authService.setToken(" ");
		authService.setIsLoggenedIn(false);
		notify.success(SccMsg.LOGOUT_SUCCESS);
		navigate("/Main");
		console.log(authService.getToken());
		console.log(authService.getIsLoggenedIn());
	});


	return (
		<></>
	);
}

export default Logout;

function logoutAction(): any {
	throw new Error("Function not implemented.");
}
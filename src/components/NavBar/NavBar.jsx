import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

	function handleLogOut() {
		userService.logOut();
		setUser(null);
	}

	return (
	<nav>
		&nbsp; &nbsp;
		<Link to="" onClick={handleLogOut}>Log Out</Link>
		&nbsp; | &nbsp;
		<Link to="/notes">My Notes</Link>
		&nbsp; | &nbsp;
		<span>Welcome, {user.name} !</span>

	</nav>
	);	
}
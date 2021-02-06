import Login from '../application/login/Login';
import LandingPage from "../application/landing-page/LandingPage";

export default [
	{
		inMenu: true,
		path: '/administration',
		component: Login,
		exact: true,
	},
	{
		landingPage: true,
		path: '',
		component: LandingPage,
		exact: true,
	}
];

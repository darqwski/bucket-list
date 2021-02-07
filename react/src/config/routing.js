import Login from '../application/login/Login';
import LandingPage from "../application/landing-page/LandingPage";
import ArticlePage from "../application/article/ArticlePage";

export default [
	{
		path: 'administration',
		component: Login,
		exact: true,
	},
	{
		path: '',
		component: LandingPage,
		exact: true,
	},
	{
		path: 'article',
		component: ArticlePage,
		exact: true,
	}
];

import Login from '../application/login/Login';
import LandingPage from "../application/landing-page/LandingPage";
import ArticlePage from "../application/article/ArticlePage";
import Dashboard from "../application/administration/dashboard/Dashboard";
import ManageArticles from "../application/administration/articles/ManageArticles";
import AddArticlePage from "../application/administration/articles/add/AddArticlePage";

export default [
	{
		path: 'administration',
		component: Login,
		exact: true,
	},
	{
		path: 'administration/dashboard',
		component: Dashboard,
		exact: true,
	},
	{
		path: 'administration/articles',
		component: ManageArticles,
		exact: true,
	},
	{
		path: 'administration/articles/add',
		component: AddArticlePage,
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

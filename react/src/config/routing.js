import Login from '../application/login/Login';
import LandingPage from '../application/landing-page/LandingPage';
import ArticlePage from '../application/article/ArticlePage';
import Dashboard from '../application/administration/dashboard/Dashboard';
import ManageArticles from '../application/administration/articles/ManageArticles';
import AddArticlePage from '../application/administration/articles/add/AddArticlePage';
import EditArticlePage from '../application/administration/articles/edit/EditArticlePage';
import InfoPage from '../application/info/InfoPage';
import ManageInfoPages from '../application/administration/info-pages/ManageInfoPages';
import AddInfoPage from '../application/administration/info-pages/add/AddInfoPage';
import EditInfoPage from '../application/administration/info-pages/edit/EditInfoPage';

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
		path: 'administration/articles/edit/',
		component: EditArticlePage,
	},,
	{
		path: 'administration/info-pages',
		component: ManageInfoPages,
		exact: true,
	},
	{
		path: 'administration/info-pages/add',
		component: AddInfoPage,
		exact: true,
	},
	{
		path: 'administration/info-pages/edit/',
		component: EditInfoPage,
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
	},
	{
		path: 'info',
		component: InfoPage,
		exact: true,
	}
];

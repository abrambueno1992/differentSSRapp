import App from './App'
import HomePage from './pages/HomePage';
import UserListPage, { loadData } from './pages/UserListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...UserListPage,
                path: '/users',
            },
            {
                ...NotFoundPage,
                
            }
        ]
    }
]


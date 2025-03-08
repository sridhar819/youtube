import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom';
import Header from './components/Header';


const ProtectedRoute = (props) => {

    const token = Cookies.get('jwt_token');
    if (!token) {
        return <Navigate to='/login' replace />;
    }

    return (<>
        <Header />
        <Outlet />
    </>);
}

export default ProtectedRoute
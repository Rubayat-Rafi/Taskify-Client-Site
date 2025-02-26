import { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const PrivetRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)

    if(user) return children;
    if(loading) return <LoadingSpinner/>

    return <Navigate to='login' state={{from: location.pathname}} replace/>
};

PrivetRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivetRoute;

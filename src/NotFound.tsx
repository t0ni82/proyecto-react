import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div>
            <Link to="/">Ir a Home</Link>
            <h2>404 Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;
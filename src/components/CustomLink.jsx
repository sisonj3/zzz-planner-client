import { Link, useLocation } from 'react-router-dom';

export default function CustomLink({ goTo, name }) {
    
    const location = useLocation();

    if (location.pathname == goTo) {
        return ( <h1>{name}</h1> );
    }

    return (
        <Link to={goTo}>{ name }</Link>
    );
}
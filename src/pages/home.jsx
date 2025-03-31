import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Navigation from '../components/navigation';
import '../styles/layout.css';

export default function Home({ token, id, username, account }) {

    const navigate = useNavigate();

    // console.log("Home Rendered!");

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            // console.log('Redirecting to login!');
            navigate('/login');
        }
        else
        {
            navigate('/agents');
        }
    }, [token]);

    return (         
        <div className="layout">
        </div>
    );
}
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function SignUp() {

    // States
    const [errors, setErrors] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Sign Up';
    },[]);

    const signUpUser = (event) => {

        event.preventDefault();

        // Form credentials
        const username = event.target[0].value;
        const password = event.target[1].value;
        const confirmPassword = event.target[2].value;

        // Status code if needed
        let status = undefined;

        // POST Fetch to create user
        fetch(`${import.meta.env.VITE_API_URL}/user`, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password, confirmPassword: confirmPassword }),
        })
            .then(response => {
                status = response.status;
                if (status == 400) {
                    return response.json();
                }
            })
            .then(response => {
                if (status == 400) {
                    // Temp array
                    let temp = [];

                    // Show error message on page
                    response.forEach(entry => {
                        // console.log(entry.msg);
                        temp.push(entry.msg);

                    });

                    setErrors(temp);
                } else {
                    // Redirect to login page
                    navigate('../login');
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className='center logForm'>
            <h1 className="noMargin">Sign Up</h1>
        
            {errors != undefined ? (
                <ul className="noMargin">
                    {
                        errors.map((err, i) => (
                            <li key={i} className="error">{ err }</li>
                        ))
                    }
                </ul>
            ): (<></>)}
            
            <form className='logForm' onSubmit={signUpUser}>
                <div>
                    <label htmlFor="username">
                        Username <input type="text" name="username" id="username" />
                    </label>
                </div>
                
                <div>
                    <label htmlFor="password">
                        Password <input type="password" name="password" id="password" />
                    </label>
                </div>

                <div>
                    <label htmlFor="confirmPassword">
                        Confirm Password <input type="password" name="confirmPassword" id="confirmPassword" />
                    </label>
                </div>
                
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}
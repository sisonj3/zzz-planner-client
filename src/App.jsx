import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Characters from './pages/characters';
import Wengines from './pages/wengines';
import DriveDisk from './pages/driveDisk';
import Inventory from './pages/inventory';
import checkStorage from './scripts/checkStorage';
import './styles/layout.css';
import './styles/display.css';
import './styles/loginSignUp.css';

function App() {

  let storageAvailable = checkStorage("localStorage");

  localStorage.clear();

  // Clear local storage if stored token is expired
  if (storageAvailable && localStorage.getItem("token") != null) {
    const decodedToken = jwtDecode(localStorage.getItem("token"));
    const currentTime = Date.now() / 1000;

    //localStorage.clear();

    if (decodedToken.exp < currentTime) {
      localStorage.clear();
    } else {
      // console.log("Token not expired");
    }
  }
  
  // States
  const [token, setToken] = useState((storageAvailable && localStorage.getItem("token") != null) ? localStorage.getItem("token") : undefined);
  const [id, setId] = useState((storageAvailable && localStorage.getItem("id") != null) ? localStorage.getItem("id") : undefined);
  const [username, setUsername] = useState((storageAvailable && localStorage.getItem("username") != null) ? localStorage.getItem("username") : undefined);
  const [account, setAccount] = useState((storageAvailable && localStorage.getItem("account") != null) ? JSON.parse(localStorage.getItem("account")) : undefined);

  // console.log("App.jsx");
  // console.log(token);
  // console.log(id);
  // console.log(username);
  // console.log(account);

  // Callback to collect info from login and stores to local storage to allow for persist
  const getLoginData = (jwt, id, username, account) => {
    // console.log("Getting login data...");

    setToken(jwt);
    setId(id);
    setUsername(username);
    setAccount(account);

    // Store information for persistence
    if (storageAvailable) {
      localStorage.clear();
      localStorage.setItem("token", jwt);
      localStorage.setItem("id", id);
      localStorage.setItem("username", username);
      localStorage.setItem("account", JSON.stringify(account));
    }

    // console.log("Done!");
  };

  const refreshAccount = () => {

    fetch(`${import.meta.env.VITE_API_URL}/account/${account.userId}`, {
        mode: 'cors',
        method: 'GET',
        headers: {
            'authorization': `Bearer ${token}`,
        },
    })
      .then(response => response.json())
      .then(response => {
        setAccount(response);
        localStorage.setItem("account", JSON.stringify(response));
        // console.log(response);
      })
      .catch(error => console.error(error));
    
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route index element={
            <Home
              token={token}
              id={id}
              username={username}
              account={account}
            />} />
          <Route path='signup' element={ <SignUp /> } />
          <Route path='login'
            element={<Login
              token={token}
              parentGetData={getLoginData}
            />}
          />
          <Route path='agents' element={<Characters token={token} account={account} callback={refreshAccount}/>} />
          <Route path='wengines' element={<Wengines token={token} account={account} callback={refreshAccount} />} />
          <Route path='loadouts' element={<DriveDisk token={token} account={account} callback={refreshAccount} />} />
          <Route path='inventory' element={<Inventory token={token} account={account} callback={refreshAccount} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

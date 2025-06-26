import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navigation from '../components/navigation';
import InventoryItem from '../components/inventoryItem';
import getImg from '../scripts/getImg';
import getAgentMats from '../scripts/getAgentMats';
import getWengineMats from "../scripts/getWengineMats";
import '../styles/layout.css';
import material from "../classes/material";

const inventoryPath = '../assets/Inventory';

export default function Inventory({ token, account, callback }) {

    const navigate = useNavigate();
    const [inventory, setInventory] = useState([]);
    const units = (account == undefined) ? [] : JSON.parse(account.units);
    const wengines = (account == undefined) ? [] : JSON.parse(account.wengines);

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            // console.log('Redirecting to login!');
            navigate('/login');
        } else {
            // console.log("Inventory page init...")
            // console.log(account);
            // console.log(units);
            // console.log(wengines);

            document.title = 'Inventory';

            updateInventory();
        }
    }, [token]);

    function updateInventory() {

        // console.log("updateInventory Start...");

        let temp = (account == undefined) ? [] : JSON.parse(account.inventory);

        const promises = [];

        // console.log("Reset Inventory...");

        // Reset inventory
        for (let i = 0; i < temp.length; i++) {
            temp[i].needed = 0;
        }

        // Add unit mats
        for (let i = 0; i < units.length; i++) {
            if (units[i].isTracked) {
                let promise = getAgentMats(units[i]);

                promises.push(
                    promise.then((materials) => {
                        // Add each item amount to needed
                        for (let j = 0; j < materials.length; j++) {
                            for (let k = 0; k < temp.length; k++){
                                if (temp[k].name == materials[j].name) {
                                    //console.log(`${materials[j].name}: ${temp[k].needed} + ${materials[j].amount}`);
                                    temp[k].needed += materials[j].amount;
                                    k = temp.length;
                                }
                            }
                        }
                    })
                );
            }
        }

        // Add wengine mats
        for (let i = 0; i < wengines.length; i++) {
            if (wengines[i].isTracked) {
                let promise = getWengineMats(wengines[i]);

                promises.push(
                    promise.then((materials) => {
                        // Add each item amount to needed
                        for (let j = 0; j < materials.length; j++) {
                            for (let k = 0; k < temp.length; k++){
                                if (temp[k].name == materials[j].name) {
                                    //console.log(`${materials[j].name}: ${temp[k].needed} + ${materials[j].amount}`);
                                    temp[k].needed += materials[j].amount;
                                    k = temp.length;
                                }
                            }
                        }
                    })
                );
            }
        }

        // Resolve all promises
        Promise.all(promises).then(
            result => {
                // console.log("Update State...");

                setInventory(temp);

                // console.log(temp);
            }
        );

    } 

    function updateOwned(name, amount) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].name == name) {

                inventory[i].owned = amount;
                updateAccountInventory();
                i = inventory.length;

            }
        }
    }

    function updateAccountInventory() {
        fetch(`${import.meta.env.VITE_API_URL}/account/inventory/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ inventory: inventory }),
        })
            .then(response => {
                callback();
            })
            .catch(error => console.error(error));
    }

    if (token != undefined) {
        return (
            <div className="layout">
                <Navigation pageName={'Inventory'} />
                <main>
                    {inventory.map((item, index) => (
                        <InventoryItem
                            key={index}
                            imgURL={getImg(inventoryPath, item.name)}
                            item={item}
                            callback={updateOwned}
                        />
                    ))}
                </main>
            </div>
        );
    }
    
};
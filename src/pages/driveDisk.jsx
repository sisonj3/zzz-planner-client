import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import loadout from '../classes/loadout';
import LoadoutDisplay from '../components/loadoutDisplay';
import Navigation from '../components/navigation';
import Add from '../components/Add';
import placeBetween from '../scripts/splitArray';
import getImg from "../scripts/getImg";
import { agents } from "../unit_info/agents";

const agentsPath = '../assets/Agents';

export default function DriveDisk({ token, account, callback }) {

    const navigate = useNavigate();
    const dragItem = useRef(0);
    const draggedOverItem = useRef(0);

    // States
    const [loadouts, setLoadouts] = useState((account == undefined) ? [] : JSON.parse(account.loadouts));

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            // console.log('Redirecting to login!');
            navigate('/login');
        } else {

            document.title = 'Drive Disks';

            // Fetch list of all characters
            // fetch(`${import.meta.env.VITE_API_URL}/character`, {
            //         mode: 'cors',
            //         method: 'GET',
            //         headers: {
            //             'authorization': `Bearer ${token}`,
            //         },
            //     })
            //         .then(response => response.json())
            //         .then(response => {
            //             setList(response);
            //         })
            //         .catch(error => console.error(error));
        }

    }, [token]);

    // Update characters when updated
    useEffect(() => {
        if (token != undefined) {
            updateAccountLoadouts();
        }
    }, [loadouts]);

    function addLoadout(characterName) {
        let temp = loadouts.slice();

        temp.push(new loadout(characterName));
                
        setLoadouts(temp);
    }

    function deleteLoadoutCallback(index) {
        let temp = loadouts.slice();

        if (index > -1) {
            temp.splice(index, 1);
        }

        setLoadouts(temp);
    }

    function updateAccountLoadouts() {
        // console.log(loadouts);

        fetch(`${import.meta.env.VITE_API_URL}/account/loadouts/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ loadouts: loadouts }),
        })
            .then(response => {
                callback();
            })
            .catch(error => console.error(error));
    }

    function dragEndSort() {
        // console.log("Re-sorted");
        // console.log(`${dragItem.current} is start`);
        // console.log(`${draggedOverItem.current} is end`);

        // Copy of loadouts state
        const loadoutsCopy = placeBetween(loadouts, dragItem.current,draggedOverItem.current);

        // // Temp copy of item being dragged
        // const temp = loadoutsCopy[dragItem.current];

        // // Swap items
        // loadoutsCopy[dragItem.current] = loadoutsCopy[draggedOverItem.current];
        // loadoutsCopy[draggedOverItem.current] = temp;

        setLoadouts(loadoutsCopy);
    }

    return (         
        <div className="layout">
            <Navigation pageName={'Drive Disks'} />

            <main className="list">
                {loadouts.map((loadout, index) => (
                    <div key={index} draggable
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={() => draggedOverItem.current = index}
                        onDragEnd={dragEndSort}
                    >
                        <LoadoutDisplay
                            imgUrl={getImg(agentsPath, loadout.name)}
                            loadout={loadout}
                            index={index}
                            updateCallback={updateAccountLoadouts}
                            deleteCallback={deleteLoadoutCallback}
                        />
                    </div>
                ))}
            </main>

            <Add list={agents} itemType={"Agent"} callback={addLoadout} />
        </div>
    );
}
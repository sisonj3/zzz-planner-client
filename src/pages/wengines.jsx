import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import Navigation from '../components/navigation';
import WengineDisplay from '../components/wengineDisplay';
import placeBetween from '../scripts/splitArray';
import Add from '../components/Add';
import getImg from '../scripts/getImg';
import wengine from '../classes/wengine';
import { wenginesList } from '../unit_info/wengines';

const wenginesPath = '../assets/W-Engines';

export default function Wengines({ token, account, callback }) {

    const navigate = useNavigate();
    const inventory = (account == undefined) ? [] : JSON.parse(account.inventory);
    const dragItem = useRef(0);
    const draggedOverItem = useRef(0);

    // States
    const [wengines, setWengines] = useState((account == undefined) ? [] : JSON.parse(account.wengines));
    const [list, setList] = useState([]);


    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            // console.log('Redirecting to login!');
            navigate('/login');
        } else {
            // console.log(wengines);

            document.title = 'W-Engines';

            // Fetch list of all W-engines
            // fetch(`${import.meta.env.VITE_API_URL}/wengine`, {
            //         mode: 'cors',
            //         method: 'GET',
            //         headers: {
            //             'authorization': `Bearer ${token}`,
            //         },
            //     })
            //         .then(response => response.json())
            //         .then(response => {
            //             setList(response);
            //             //console.log(response);
            //         })
            //         .catch(error => console.error(error));
        }
    }, [token]);

    // Update wengines when state changes
    useEffect(() => {
        if (token != undefined) {
            updateAccountWengines();
        }
    }, [wengines])

    // Wengine to Wengines
    function addWengine(wengineName) {
        let temp = wengines.slice();

        temp.push(new wengine(wengineName));
        setWengines(temp);

        // console.log("addWengine");
        // console.log(wengines);

    }

    function deleteWengineCallback(index) {
        let temp = wengines.slice();

        if (index > -1) {
            temp.splice(index, 1);
        }

        setWengines(temp);

        // console.log("deleteWengineCallback");
        // console.log(wengines);
    }

    // Update account wengines array with fetch
    function updateAccountWengines() {
        // console.log("updateAccountWengines()");
        // console.log(wengines);

        fetch(`${import.meta.env.VITE_API_URL}/account/wengines/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wengines: wengines }),
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

        // Copy of wengines state
        const wenginesCopy = placeBetween(wengines, dragItem.current,draggedOverItem.current);

        // // Temp copy of item being dragged
        // const temp = wenginesCopy[dragItem.current];

        // // Swap items
        // wenginesCopy[dragItem.current] = wenginesCopy[draggedOverItem.current];
        // wenginesCopy[draggedOverItem.current] = temp;

        setWengines(wenginesCopy);
    }

    return (
        <div className="layout">
            <Navigation pageName={'W-Engines'} />
            
            <main className="list">    
                {wengines.map((wengine, index) => (
                    <div key={index} draggable
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={() => draggedOverItem.current = index}
                        onDragEnd={dragEndSort}
                    >
                        
                        <WengineDisplay
                            token={token}
                            imgUrl={getImg(wenginesPath, wengine.name)}
                            wengine={wengine}
                            index={index}
                            updateCallback={updateAccountWengines}
                            deleteCallback={deleteWengineCallback}
                            inventory={inventory}
                        />

                    </div>                    
                ))}

            </main>

            <Add list={wenginesList} itemType={"W-Engine"} callback={addWengine} />
        </div>
    );
};
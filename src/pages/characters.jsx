import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import character from '../classes/character';
import getImg from '../scripts/getImg';
import Navigation from '../components/navigation';
import Add from '../components/Add';
import CharacterDisplay from '../components/characterDisplay';
import placeBetween from "../scripts/splitArray";
import agents from "../unit_info/agents";

const agentsPath = '../assets/Agents';

export default function Characters({ token, account, callback }) {

    const navigate = useNavigate();
    const inventory = (account == undefined) ? [] : JSON.parse(account.inventory);
    const dragItem = useRef(0);
    const draggedOverItem = useRef(0);

    // States
    const [characters, setCharacters] = useState((account == undefined) ? [] : JSON.parse(account.units));
    const [list, setList] = useState([]);

    // Navigate to login if no token
    useEffect(() => {
        if (token == undefined) {
            // console.log('Redirecting to login!');
            navigate('/login');
        } else {
            // console.log("Characters page init...");

            document.title = 'Agents';

            // Fetch list of all characters
            let temp = [];

            for (let i = 0; i < agents.length; i++){
                temp.push(agents[i].name);
            }

            setList(temp);
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
            updateAccountCharacters();
        }
    }, [characters]);

    // Add character to characters
    function addCharacter(characterName) {
        let temp = characters.slice();

        temp.push(new character(characterName));
                
        setCharacters(temp);

    }

    function deleteCharacterCallback(index) {
        let temp = characters.slice();

        if (index > -1) {
            temp.splice(index, 1);
        }

        setCharacters(temp);
    }

    function updateAccountCharacters() {
        // console.log("updateAccountCharacters");
        // console.log(characters);

        fetch(`${import.meta.env.VITE_API_URL}/account/units/${account.userId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ units: characters }),
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

        // Copy of characters state
        const charactersCopy = placeBetween(characters, dragItem.current,draggedOverItem.current);

        // console.log(charactersCopy);

        // // Temp copy of item being dragged
        // const temp = charactersCopy[dragItem.current];

        // // Swap items
        // charactersCopy[dragItem.current] = charactersCopy[draggedOverItem.current];
        // charactersCopy[draggedOverItem.current] = temp;

        setCharacters(charactersCopy);
    }

    return (
        <div className="layout">

            <Navigation pageName={'Agents'} />

            <main className="list">
                {characters.map((character, index) => (
                    <div key={index} draggable
                        onDragStart={() => dragItem.current = index}
                        onDragEnter={() => draggedOverItem.current = index}
                        onDragEnd={dragEndSort}
                    >
                        <CharacterDisplay
                            token={token}
                            imgUrl={getImg(agentsPath, character.name)}
                            agent={character}
                            index={index}
                            updateCallback={updateAccountCharacters}
                            deleteCallback={deleteCharacterCallback}
                            inventory={inventory}
                        />
                    </div>
                ))}
            </main>

            <Add list={list} itemType={"Agent"} callback={addCharacter} />
        </div>
    );
};
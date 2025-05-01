import { useState, useEffect, useRef } from "react";
import numArr from '../scripts/numArr';
import plus from '../assets/plus.svg';
import gear from '../assets/gear.svg';
import getImg from "../scripts/getImg";

const disksPath = '../assets/Sets';

const setsList = [
    "Phaethon's Melody", "Shadow Harmony",
    "Astral Voice", "Branch & Blade Song",
    "Fanged Metal", "Polar Metal",
    "Thunder Metal", "Chaotic Metal",
    "Inferno Metal", "Proto Punk",
    "Chaos Jazz", "Swing Jazz",
    "Soul Rock", "Hormone Punk",
    "Freedom Blues", "Shockstar Disco",
    "Puffer Electro", "Woodpecker Electro"
];

export default function LoadoutDisplay({ imgUrl, loadout, index, updateCallback, deleteCallback }) {
    
    const overlay = useRef(null);
    const sliders = useRef(null);

    // States
    const [d1, setD1] = useState(loadout.d1);
    const [d2, setD2] = useState(loadout.d2);
    const [d3, setD3] = useState(loadout.d3);
    const [d4, setD4] = useState(loadout.d4);
    const [d5, setD5] = useState(loadout.d5);
    const [d6, setD6] = useState(loadout.d6);
    const [highlight, setHighlight] = useState('');
    const [sets, setSets] = useState(loadout.sets);

    // Find highlight color to have value highlighted when rendered
    useEffect(() => {
        findHighlight();
    }, []);

    // Update values when loadout changes during sorting
    useEffect(() => {
        setD1(loadout.d1);
        setD2(loadout.d2);
        setD3(loadout.d3);
        setD4(loadout.d4);
        setD5(loadout.d5);
        setD6(loadout.d6);
        setSets(loadout.sets);
        findHighlight();
    }, [loadout]);

    function deleteLoadoutCallback() {
        deleteCallback(index);
    }

    function changeD1(event) {
        // console.log(loadout);
        loadout.d1 = Number(event.target.value);
        setD1(loadout.d1);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function changeD2(event) {
        loadout.d2 = Number(event.target.value);
        setD2(loadout.d2);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function changeD3(event) {
        loadout.d3 = Number(event.target.value);
        setD3(loadout.d3);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function changeD4(event) {
        loadout.d4 = Number(event.target.value);
        setD4(loadout.d4);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function changeD5(event) {
        loadout.d5 = Number(event.target.value);
        setD5(loadout.d5);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function changeD6(event) {
        loadout.d6 = Number(event.target.value);
        setD6(loadout.d6);

        updateLoadoutSubValue();
        findHighlight();
        updateCallback();
    }

    function updateLoadoutSubValue() {
        loadout.subValue =
            Number(((loadout.d1 +
                loadout.d2 +
                loadout.d3 +
                loadout.d4 +
                loadout.d5 +
                loadout.d6) / 45).toFixed(2));
    }

    function findHighlight() {

        let color = '';

        // Set highlight color based on subValue
        if (loadout.subValue < 0.45) {
            color = 'red';
        } else if (loadout.subValue < 0.6) {
            color = 'yellow';
        } else if (loadout.subValue < 0.73) {
            color = 'greenyellow';
        } else {
            color = 'green';
        }

        setHighlight(color);

    }

    // Add selected set to sets
    function selectSet(event, name) {

        let temp = [...sets];
        
        // console.log(event);
        // console.log(event.target.checked);
        // console.log(temp.length);
        // console.log(temp);
        // console.log(loadout);

        // Prevent selection
        if (sets.length >= 3 && event.target.checked) {
            event.target.checked = false;
        }

        if (!event.target.checked) {

            for (let i = 0; i < temp.length; i++) {
                if (temp[i] == name) {
                    temp.splice(i, 1);
                }
            }

            setSets(temp);
        }

        // Add set to sets
        if (sets.length < 3 && event.target.checked) {

            temp.push(name);
            
            setSets(temp);
        }

        loadout.sets = temp;
        updateCallback();
        // console.log(temp);
    }

    // Used to find the checked value by seeing if set is in sets
    function checkStatus(name) {

        for (let i = 0; i < sets.length; i++) {
            if (sets[i] == name) {
                return true
            }
        }

        return false;
    }

    function openSets(event) {
        event.preventDefault();

        overlay.current.classList.remove('hidden');
        sliders.current.classList.remove('hidden');
    }

    function closeSets(event) {
        event.preventDefault();

        overlay.current.classList.add('hidden');
        sliders.current.classList.add('hidden');
    }

    function preventDrag(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    return (
        <>
            <div className='overlay hidden' ref={overlay} draggable onDragStart={preventDrag}></div>  

            <div className="unit">
                <div className="buttons">
                    <button onClick={openSets} className="settings"><img src={gear} /></button>

                    <button onClick={deleteLoadoutCallback} className='close'><img className='plus rotate' src={plus} /></button>
                </div>

                <div className="icon">
                    <img src={imgUrl} alt={loadout.name} title={loadout.name} />

                    {sets.map((set, index) => (
                        <img key={index} src={getImg(disksPath, set)} alt={set} title={set} />
                    ))}
                </div>

                <div className="substats" draggable onDragStart={preventDrag}>
                    <div>
                        <label htmlFor="Slot_1">D1: </label>

                        <select name="Slot_1" id="Slot_1" onChange={changeD1}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d1) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Slot_2">D2: </label>

                        <select name="Slot_2" id="Slot_2" onChange={changeD2}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d2) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Slot_3">D3: </label>

                        <select name="Slot_3" id="Slot_3" onChange={changeD3}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d3) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Slot_4">D4: </label>

                        <select name="Slot_4" id="Slot_4" onChange={changeD4}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d4) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Slot_5">D5: </label>

                        <select name="Slot_5" id="Slot_5" onChange={changeD5}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d5) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label htmlFor="Slot_6">D6: </label>

                        <select name="Slot_6" id="Slot_6" onChange={changeD6}>
                            {numArr(0, 9).map((num, index) => (
                                (num == d6) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>
                    
                    <span className={highlight}>{((d1+d2+d3+d4+d5+d6) / 45).toFixed(2)}</span>
                </div>

                <div className="loadouts hidden" ref={sliders} draggable onDragStart={preventDrag}>

                    <button onClick={closeSets} className='close addBtn'><img className='plus rotate' src={plus} /></button>

                    <div className="sets">
                        {setsList.map((set, index) => (
                            <div key={index}>
                                <input type="checkbox" name={`${loadout.name}: ${set}`} id={`${loadout.name}: ${set}`} checked={checkStatus(set)} onChange={(e) => selectSet(e, set)}/>
                                <label htmlFor={`${loadout.name}: ${set}`}><img src={getImg(disksPath, set)} alt={set} title={set} /></label> 
                            </div>
                        ))}
                    </div>
                    
                </div>


            </div>
        </>
        
    );
}
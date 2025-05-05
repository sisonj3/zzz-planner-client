import { useState, useEffect, useRef } from "react";
import getWengineMats from '../scripts/getWengineMats';
import numArr from '../scripts/numArr';
import plus from '../assets/plus.svg';
import gear from '../assets/gear.svg';
import chevrons from '../assets/chevrons.svg';

export default function WengineDisplay({ token, imgUrl, wengine, index, updateCallback, deleteCallback, inventory }) {

    const overlay = useRef(null);
    const sliders = useRef(null);

    // States
    const [ascC, setAscC] = useState(wengine.asc_c);
    const [ascG, setAscG] = useState(wengine.asc_g);
    const [lvlC, setLvlC] = useState(wengine.lvl_c);
    const [lvlG, setLvlG] = useState(wengine.lvl_g);
    const [tracked, setTracked] = useState(wengine.isTracked);
    const [mats, setMats] = useState([]);

    // Get materials
    useEffect(() => {
        setAscC(wengine.asc_c);
        setAscG(wengine.asc_g);
        setLvlC(wengine.lvl_c);
        setLvlG(wengine.lvl_g);
        setTracked(wengine.isTracked);
        updateMats();
    }, [wengine]);
    
    function updateMats() {
        let promise = getWengineMats(token, wengine);

        promise.then((list) => {
            setMats(list);
        });
    }

    function ownedAmount(name) {
        for (let i = 0; i < inventory.length; i++) {
            if (inventory[i].name == name) {
                return inventory[i].owned;
            }
        }
    }

    function deleteWengineCallback() {
        deleteCallback(index);
    }

    function changeAscC(event) {
        wengine.asc_c = Number(event.target.value);
        setAscC(wengine.asc_c);
        updateMats();

        updateCallback();
    }

    function changeAscG(event) {
        wengine.asc_g = Number(event.target.value);
        setAscG(wengine.asc_g);
        updateMats();

        updateCallback();
    }

    function changeLvlC(event) {
        wengine.lvl_c = Number(event.target.value);
        setLvlC(wengine.lvl_c);
        updateMats();

        updateCallback();
    }

    function changeLvlG(event) {
        wengine.lvl_g = Number(event.target.value);
        setLvlG(wengine.lvl_g);
        updateMats();

        updateCallback();
    }

    function changeTracking(event) {
        wengine.isTracked = event.target.checked;
        setTracked(wengine.isTracked);

        updateCallback();
    }

    function openSliders(event) {
        event.preventDefault();

        overlay.current.classList.remove('hidden');
        sliders.current.classList.remove('hidden');
    }

    function closeSliders(event) {
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

                    <input type="checkbox" name="isTracked" id="isTracked" checked={tracked} onChange={changeTracking} />

                    <button onClick={openSliders} className="settings"><img src={gear} /></button>

                    <button onClick={deleteWengineCallback} className='close'><img className='plus rotate' src={plus} /></button>

                </div>

                <div className="icon">
                    <img src={imgUrl} alt={wengine.name} title={wengine.name} />
                </div>

                <div className="materials">
                    {mats.map((mat, index) => (
                        <div className="material" key={index}>
                            <img src={mat.imgUrl} alt={mat.name} title={mat.name} />
                            <span >{ownedAmount(mat.name)} / {mat.amount}</span>
                        </div>
                    ))}
                </div>
                
                <div className="sliders hidden" ref={sliders} draggable onDragStart={preventDrag}>
                    <button onClick={closeSliders} className='close addBtn'><img className='plus rotate' src={plus} /></button>

                    <div className="slider">
                        <label htmlFor="asc-c">Ascension:</label>

                        <select name="asc-c" id="asc-c" onChange={changeAscC}>
                            {numArr(0, 5).map((num, index) => (
                                (num == ascC) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>

                        <img src={chevrons} alt=">>" title="Upgrade to" />

                        <select name="asc-g" id="asc-g" onChange={changeAscG}>
                            {numArr(0, 5).map((num, index) => (
                                (num == ascG) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>

                    </div>

                    <div className="slider">
                        <label htmlFor="lvl-c">Level:</label>

                        <select name="lvl-c" id="lvl-c" onChange={changeLvlC}>
                            {numArr(1, 60).map((num, index) => (
                                (num == lvlC) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>

                        <img src={chevrons} alt=">>" title="Upgrade to" />

                        <select name="lvl-g" id="lvl-g" onChange={changeLvlG}>
                            {numArr(1, 60).map((num, index) => (
                                (num == lvlG) ? <option key={index} value={num} selected>{ num }</option> : <option key={index} value={num}>{ num }</option>
                            ))}
                        </select>
                    </div>

                </div>

            </div>
        </>
        
    );
}
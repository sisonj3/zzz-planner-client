import { useState, useEffect, useRef } from "react";
import getWengineMats from '../scripts/getWengineMats';
import plus from '../assets/plus.svg';
import gear from '../assets/gear.svg';

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
                        <label htmlFor="asc-c">Current Ascension:</label>
                        <input type="range" name="asc-c" id="asc-c" min={0} max={5} value={ascC} onInput={changeAscC} />
                        <span>{ascC}</span>
                    </div>

                    <div className="slider">
                        <label htmlFor="asc-g">Final Ascension:</label>
                        <input type="range" name="asc-g" id="asc-g" min={0} max={5} value={ascG} onInput={changeAscG}/>
                        <span>{ascG}</span>
                    </div>

                    <div className="slider">
                        <label htmlFor="lvl-c">Current Level:</label>
                        <input type="range" name="lvl-c" id="lvl-c" min={0} max={60} value={lvlC} onInput={changeLvlC}/>
                        <span>{lvlC}</span>
                    </div>
                    
                    <div className="slider">
                        <label htmlFor="lvl-g">Final Level:</label>
                        <input type="range" name="lvl-g" id="lvl-g" min={0} max={60} value={lvlG} onInput={changeLvlG}/>
                        <span>{lvlG}</span>
                    </div>
                </div>

            </div>
        </>
        
    );
}
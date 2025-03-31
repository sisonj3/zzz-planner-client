import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import CustomLink from './CustomLink';


export default function NavBar({pageName}) {

    const navigate = useNavigate();
    const overlay = useRef(null);
    const sliders = useRef(null);

    function logOut() {
        localStorage.clear();
        window.location.reload();
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

    return (
        <>
            <div className='overlay hidden' ref={overlay}></div>

            <nav>
                <CustomLink goTo={'/agents'} name={'Agents'} />
                <CustomLink goTo={'/wengines'} name={'W-Engines'} />
                <CustomLink goTo={'/loadouts'} name={'Drive Disks'} />
                <CustomLink goTo={'/inventory'} name={'Inventory'} />
                <button className="logOut" onClick={openSliders}>Log Out</button>
            </nav>

            <div className="logOutBox center hidden" ref={sliders}>

                <span>Are you sure?</span>

                <div>
                    <button className="logOut" onClick={logOut}>Yes</button>
                    <button className="logOut" onClick={closeSliders}>No</button>
                </div>
            </div>
        </>
    );

}
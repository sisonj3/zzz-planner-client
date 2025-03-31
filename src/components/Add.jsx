import { useRef } from 'react';
import plus from '../assets/plus.svg';
import '../styles/add.css';

// List of items, Name of item type (Character or Wengine), callback to return selected item
export default function Add({ list, itemType, callback }) {

    const overlay = useRef(null);
    const form = useRef(null);

    function openForm(event) {
        event.preventDefault();

        overlay.current.classList.remove('hidden');
        form.current.classList.remove('hidden');
    }

    function closeForm(event) {
        event.preventDefault();

        overlay.current.classList.add('hidden');
        form.current.classList.add('hidden');
    }

    function addItem(event) {
        event.preventDefault();
        //console.log(event);

        let selectedItem = event.target.parentNode[1].value

        callback(selectedItem);
    }

    return (
        <>
            <button className='addBtn' onClick={openForm}><img className='plus' src={plus} /></button>

            <div className='overlay hidden' ref={overlay}></div>     
            
            <form className='addForm hidden' ref={form}>

                <button onClick={closeForm} className='close addBtn'><img className='plus rotate' src={plus} /></button>

                <label htmlFor={ itemType }>{itemType}</label>
                <select name={itemType} id={itemType}>
                    {list.map((item, index) => (
                        <option key={index} value={item.name}>{ item.name }</option>
                    ))}
                </select>


                <button onClick={addItem} className='submit'>Add</button>
            </form>
        </>
    );
}
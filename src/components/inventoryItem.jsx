import { useEffect } from 'react';
import '../styles/inventoryItem.css';

export default function InventoryItem({ imgURL, item, callback }) {

    // useEffect(() => {
    //     console.log(item);
    // }, []);

    function updateOwned(event) {
        //console.log(event.target.value);

        callback(item.name, Number(event.target.value));

        event.preventDefault();
    }

    return (
        <div className="inventoryItem">
            <img src={imgURL} alt={item.name} title={item.name} />
            <div>
                <label htmlFor={`${item.name} Owned`}>Owned:</label>
                <input type="number" onChange={updateOwned} name={`${item.name} Owned`} id={`${item.name} Owned`} min={0} defaultValue={item.owned}/>
            </div>
            <div>
                <span>Required: {item.needed}</span>
            </div>
        </div>
    );
}
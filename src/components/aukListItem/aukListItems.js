import React, { useState } from "react";
import AukItem from "../aukItem/aukItem";
import './aukListItem.css';
import AddNewItemButton from '../addNewItemButton/addNewItemButton';
import nextId from "react-id-generator";
const AukListItems = ({ abobs }) => {
    const [listItems, setListItem] = useState([]);
    const addNewItem = () => {
        const newItem = <AukItem key={nextId()} />;
        setListItem([...listItems, newItem]);

    }
    return (
        <>
            <div className="auk-list-items">
                {listItems}
            </div>
            <button className="btn btn-success add-new-item-button" onClick={addNewItem}>+</button>
        </>
    )
}
export default AukListItems;
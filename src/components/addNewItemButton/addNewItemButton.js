import React from "react";
import "./addNewButtonItem.css"
const AddNewItemButton = ({ addvalue }) => {
    console.log({ addvalue });
    const AddNew = () => {

    }
    return (
        <button className="btn btn-success add-new-item-button" addvalue={addvalue + "NIggers"}>+</button>
    )
}
export default AddNewItemButton;
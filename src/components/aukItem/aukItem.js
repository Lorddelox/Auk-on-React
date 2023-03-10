import React, { useState } from "react";
import { Input, InputGroup, Button } from "reactstrap";

function AukItem() {
    const [value, setValue] = useState(0);
    const [updatedValue, setUpdatedValue] = useState('');
    const handleChange = (event) => {
        setUpdatedValue(+event.target.value);
    };
    const handleClick = () => {
        setValue(value + updatedValue);
        setUpdatedValue("");
    };
    // Тупо чтобы не было предупреждения  Failed form propType: You provided a `value` prop to a form field without an `onChange` handler onChange тоже
    const inputChangedHandler = (event) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }

    return (
        <InputGroup>
            <Input placeholder="name"></Input>
            <Input placeholder="input value" value={value} onChange={(e) => inputChangedHandler(e)}></Input>
            <Input placeholder="add input" className="add-input" onChange={(e) => handleChange(e)} value={updatedValue}></Input>
            <Button onClick={() => handleClick()}>+</Button>
        </InputGroup >
    )
}
export default AukItem;
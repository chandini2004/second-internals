import { React, useState } from 'react';
import Select from 'react-select';
import './Dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "Lime",
        },
        {
            id: 2,
            label: "Lavender",
        },
        {
            id: 3,
            label: "Crimson",
        },
        {
            id: 4,
            label: "Darkblue",
        },
        {
            id: 5,
            label: "Teal",
        },
        {
            id: 6,
            label: "Rebeccapurple",
        },
        {
            id: 7,
            label: "Ghostwhite",
        },
        {
            id: 8,
            label: "Aquamarine",
        },
        {
            id: 9,
            label: "Aliceblue",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1><u>COLOR CHANGER</u></h1>
            </center>
            <div className='d'>
                <h3>Choose your Color from below Dropdown Box</h3>
            </div>
            <div className="dropdownContainer">
            <center>
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
            </center>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;
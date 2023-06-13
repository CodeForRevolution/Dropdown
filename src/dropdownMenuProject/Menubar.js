import React, { useState } from 'react'
import './Menubar.css'
const Dropdown = () => {
    const [toggle, setToggle] = useState(false);      //setting toggle to false because we are hidding the dropdown first

    const menuItem = [
        'Yes', 'Probably not', 'No', 
    ]

    const showDropdonw = (event) => {
        event.stopPropagation();
        setToggle(true);   
                                                     //showing the dropdown by making toggle true
    }
    const hideDropdown = (event) => {
        event.preventDefault();
        event.stopPropagation();
        setToggle(false);                             //hiding the dropdown by making toggle false
    }

   
    return (
        <div className='body' onClick={(e)=>{hideDropdown(e)}}>
<h3>Should we use dropdown?</h3>
            <div className="menubar">
                <ul onMouseMove={(e) => { showDropdonw(e) }}  onClick={(e) => { showDropdonw(e) }}  >
                    <span >Select<i className="fa-solid fa-caret-down"></i></span>
                    {
                        toggle ? <div className='dropdown'>
                            {menuItem.map((item,index) => {        //apply map function to array to return the element inside a tag
                                return <a href="" key={index} onClick={(e) => { hideDropdown(e) }}>{item}</a>
                            })}
                        </div> : null
                    }
                </ul>

            </div>

        </div>
    )
}

export default Dropdown;

import React, { useState } from 'react'

function List() {
    const [checked, setChecked ] = useState(false);

    const onChecked = () => {
        setChecked(true);
    }


    return (
        <div className="list__movies" style={{padding: '200px'}}>
            Select your pizza topping:
            <div className="topping">
        <input type="checkbox" id="topping" name="topping" 
        value="Paneer" onChange={onChecked}/>
        Paneer
      </div>
        </div>
    )
}

export default List

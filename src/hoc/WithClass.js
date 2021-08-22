import React from 'react';

import '../Bootstrap/NavBar/NavBar.css';

const WithClass = props =>{
    return(
        <div className={props.list}>
            {props.children}
        </div>
    )
}
export default WithClass;
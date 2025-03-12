import React from 'react';

import {link} from 'react-router-dom';

function Navbar(){
return (
    <nav style={styles.navbar}>
        <ul>
            <li><link to="/" </li>
        </ul>
    </nav>
)

}

const styles = {
    navbar: {
        backgroundColor: "white"
        padding: "10px"
    }, 
    navlist: {
        liststyle: "none"
        display: "flex"
        
    }
}

export default Navbar
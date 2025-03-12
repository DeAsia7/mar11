import React from 'react';

import {Link} from 'react-router-dom';

function Navbar(){
return (
    <nav style={styles.navbar}>
        <ul>
        <li> <Link to=""> Go Here</Link></li>
        </ul>
    </nav>
)

}

const styles = {
    navbar: {
        backgroundColor: "purple",
        padding: "10px"
    }, 
    navlist: {
        liststyle: "none",
        display: "flex"

    }
}

export default Navbar
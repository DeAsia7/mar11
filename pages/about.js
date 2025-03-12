import React, { useState } from "react";

function About() {
    const [shownore, seetShowMore] = useState(false);

    return (

    <div>
        <h1>About us</h1>
        <p>holy molly donut shop</p>
<button onClick={()=> seetShowMore(true)}>Show More</button>
{show  (
    <p>donuts</p>
)}

    </div>
    )
}
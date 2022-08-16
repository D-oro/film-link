import React from "react";

const Film = ({name, children}) => {
    return(
        <>
            <h4>{children}</h4>
            <p>{name}</p>
        </>
    )
}

/* <a href={url}>{name}</a> */

export default Film;
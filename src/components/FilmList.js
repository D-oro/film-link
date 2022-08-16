import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {
    const filmNodes = films.map(film => {
        return (
            <Film url = {film.url} name ={film.name} key={film.id}/>
        );
    })

    return(
        <>
        {filmNodes} 
        </>
    )
}

export default FilmList;

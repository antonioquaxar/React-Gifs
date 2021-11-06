import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([' Naruto ']);

    //const categories = ['One puch Man', 'Tokio ghul', 'Dragon ball'];
    //const handleAdd = () => {
    //    setCategories(['jesus el crack', ...categories])
    //}

    return (
        <>
            <h2> Busca tus gifs favoritos </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

        <ol>
           {
               categories.map( category => ( 
                   <GifGrid
                   key={category}
                   category={category}
                   />
               ))
           }
        </ol>
        </>
        
    )
}
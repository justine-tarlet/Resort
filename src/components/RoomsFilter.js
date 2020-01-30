import React from "react";
import {useContext } from "react";
import {RoomContext} from "../context";
import Title from "../components/Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets 
    } = context;
    
    let types = getUnique(rooms, "type");
    types = ["Tous les types",...types];
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(rooms, "capacity");
    people = people.map((item, index)=>{
        return <option key={index} value={item}>
            {item}
        </option>
    })
    return (
    <section className="filter-container">
        <Title title="Rechercher des chambres" />
        <form className="filter-form">
            <div className="form-group">
                <label htmlFor="type">Type de chambre</label>
                <select name="type" 
                id="type" 
                value={type} 
                className="form-control" 
                onChange={handleChange}>
                    {types}
                </select>


            </div>
    
            <div className="form-group">
                <label htmlFor="capacity">Personnes</label>
                <select name="capacity" 
                id="capacity" 
                value={capacity} 
                className="form-control" 
                onChange={handleChange}>
                    {people}
                </select>
            </div>

            <div className="form-group">
            <label htmlFor="price"> Prix {price} €</label>
            <input type="range" name="price" 
            min={minPrice} 
            max={maxPrice} 
            id="price" 
            value={price} 
            onChange={handleChange}
            className="from-control" />
            </div>

            <div className="form-group">
            <label htmlFor="size"> Superficie </label>
            <div className="size-inputs">
            <input type="number" name="minSize" 
            id="size" 
            value={minSize} 
            onChange={handleChange}
            className="size-input" />
             <input type="number" name="maxSize" 
            id="size" 
            value={maxSize} 
            onChange={handleChange}
            className="size-input" />
            </div>
            </div>

            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox"
                     name="breakfast" 
                     id="breakfast"
                     checked={breakfast}
                     onChange={handleChange}
                     />
                    <label htmlFor="breakfast">Petit déjeuner</label>
                </div>
            </div>

            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox"
                     name="pets" 
                     id="peys"
                     checked={pets}
                     onChange={handleChange}
                     />
                    <label htmlFor="pets">Animaux</label>
                </div>
            </div>

        </form>
    </section>
    );
        
}

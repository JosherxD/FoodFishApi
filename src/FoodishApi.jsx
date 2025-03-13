import React, { useEffect, useState } from 'react'
import { getImage } from './helpers/getImage';
import { useFetch } from './hooks/useFetch';


const CATEROGIES = ['pizza', 'burger', 'pasta',];

export const FoodishApi = () => {



    const [image, setImage] = useState("");
    const [category, setCategory] = useState("burger");

    const url = "https://foodish-api.com/api/images/" + category
    const { data, isLoading, hasError } = useFetch(url);



    const onButtonClick = (event) => {
        getImage(category).then((image) => {
            setImage(image);
        });
    };

    if (isLoading) {
        return (
            <>
                <h2>Loading...</h2>
            </>
        );
    }

    const onSelectionChange = (event) => {
        setCategory(event.target.value);

    }

    return (
        <>

            <div className="foodish-container">
                <h1>Foodish App </h1>
                <select name="categories"
                    id="categories"
                    onChange={onSelectionChange}>
                    {CATEROGIES.map((item, index) => {
                        return (
                            <option
                                value={item}
                                key={index + 1}> {item}
                            </option>
                        );
                    })}
                </select>
                
                    

                <img src={data.image} alt="food" className="img" />
            </div>
        </>
    );
}
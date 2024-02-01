import React, { useEffect, useState } from 'react'

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ( {category} ) => {
     
    const {images, isLoading} = useFetchGifs( category )

    console.log(isLoading)

    return (
        
        <>
        <div className ="card-grid"> 
            {isLoading ? <h1>Loading ...</h1> : 
                images.map(gif => (
                    <GifItem key={gif.id}
                    { ...gif }
                    />
                    ))
            };
        </div>   
         
        </>
    )
}

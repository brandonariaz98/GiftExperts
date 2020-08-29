import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs( category );
    
    //getGifs();

    return(
        <>
            <h3>{category}</h3>

            { loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className='card-grid'>
                <ol>
                {
                    data.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
                </ol>
            </div>
        </>
    );
}
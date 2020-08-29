import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GiftGrid';
export const GifExpertApp = () => {

    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball Z'];
    const [categories, setCategories] = useState(['']);



    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />


            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category= { category }
                        />
                    ))
                }
            </ol>

        </div>
    );    
}


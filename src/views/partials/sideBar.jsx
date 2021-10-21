import React from 'react';


export default function SideBar({filterSidebar,sort}){

    function handleChange(e){
        // console.log(e.target.checked)
        if(e.target.checked)
            filterSidebar(e.target.value)
        else
            filterSidebar(false)
    }

    function handleSort(e){
        if(e.target.value){
            sort(e.target.value)
        }else{
            sort(false)
        }
    }

    // console.log(filterSidebar)

    return (
        <>
            <label>
                <input type="checkbox" value="Movie" onChange={handleChange}/>
                MOVIE
            </label>
            <label>
                <input type="radio" value="asc" name="sort" onChange={handleSort}/>
                ASC
            </label>
            <label>
                <input type="radio" value="desc" name="sort" onChange={handleSort}/>
                DESC
            </label>
        </>
    )
}
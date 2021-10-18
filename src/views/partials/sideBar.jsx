import React from 'react';


export default function SideBar({filterSidebar}){

    function handleChange(e){
        console.log(e.target.checked)
        filterSidebar.filterSidebar(e.target.checked)
    }

    return (
        <>
            <label>
                <input type="checkbox" value="MOVIE" onChange={handleChange}/>
                MOVIE
            </label>
        </>
    )
}
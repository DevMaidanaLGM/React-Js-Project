import React from 'react';
import '../styles/sidebar.css';
import { Form } from 'react-bootstrap';

export default function SideBar({filterSidebar,sort}){

    function handleChange(e){
        // console.log(e.target.checked)
        console.log(e.target.value)
        if(e.target.value)
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
        <div className="sidebar">
            <h5>Filters</h5>
            <br/>
            <Form.Select aria-label="Select Type" onChange={handleChange}>
                <option value="TV">Type</option>
                <option value="TV">TV</option>
                <option value="Movie">Movie</option>
                <option value="OVA">Ova</option>
            </Form.Select>
            <br/>
            <Form.Check
                type="radio"
                label="Asc"
                name="sort"
                value="asc"
                id="asc"
                onChange={handleSort}
                className="check"
            />
            <br/>
            <Form.Check
                type="radio"
                label="Desc"
                name="sort"
                value="desc"
                id="desc"
                onChange={handleSort}
            />
        </div>
    )
}
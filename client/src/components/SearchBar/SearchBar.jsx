import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getgetByName,getCountries } from "../../actions/actions";


export default function SearchBar(){
    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    return(
        <div>
            <input  
                    type="text" 
                    placeholder="Search by name"
                    name="input"
                    autocomplete="off"
            />
        </div>
    )
}
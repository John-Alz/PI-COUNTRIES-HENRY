import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {  Link, useParams } from 'react-router-dom';
import { getDetail } from "../../actions/actions";

export default function CountryId() {
    const countryDetail = useSelector((state) => state.country);
    const dispatch = useDispatch();

    let {id} = useParams();

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return(
        
        <div className="container-details">
            <Link to='/countries'>Back to countries</Link>
            <h1>{countryDetail.name}</h1>
            <h3>{countryDetail.id}</h3>
            <h4>Region: {countryDetail.subregion}</h4>
            <h4>Capital: {countryDetail.capital}</h4>
        </div>
        
    )
}


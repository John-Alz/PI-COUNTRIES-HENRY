import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Card from "../Card/Card";
import './Cards.css';
import { getCountries } from "../../actions/actions";

export default function Cards() {
    const estadoCountries = useSelector((state) => state.countries)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        
        <>
        <Link to='/'>home</Link>
        <div className="cards">
            {estadoCountries.length > 0 ? estadoCountries.map(
                (c) => (
                    <Link to={`/detail/${c.id}`} key={c.id}>
                    <Card
                    key={c.id}
                    name={c.name}
                    flag={c.flag}
                    region={c.subregion}
                    />
                    </Link>
                )
            ) 
            : <h2>ESTA VACIO!!!</h2>}
        </div>
        </>
    )
}

// return (
//     <div className="Cards">
//         {countries &&
//         countries.map((c) => (
//             <Link to={`/country/${c.id}`} key={c.id}>
//             <Card
//             key={c.id}
//             name={c.name}
//             flag={c.flag}
//             region={c.region}
//             />
//             </Link>
//         ))
//         }

//     </div>
// )
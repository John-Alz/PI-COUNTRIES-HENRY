import axios from 'axios'

let GET_ALL = "GET_ALL"
let GET_NAME = "GET_NAME"
let GET_DETAIL_ID = "GET_DETAIL_ID"

// const url = 'http://localhost:3001/countries'

export function getCountries (){
    return async function(dispacth) {
        try {
            const res = await axios.get('http://localhost:3001/countries')
            dispacth({
                type: GET_ALL,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getByName(name){
    return async function(dispacth){
        try {
            const res = await axios.get('http://localhost:3001/countries?name=' + name)
            dispacth({
                type: GET_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getDetail(id){
    return async function (dispacth){
        try {
            const res = await axios.get('http://localhost:3001/countries/' + id)
            dispacth({
                type: GET_DETAIL_ID,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export function postActivity(payload){
    return async function(){
        try {
            const res = await axios.post('http://localhost:3001/activities', payload)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}
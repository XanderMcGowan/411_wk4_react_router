import React from 'react'
import cars from '../cars.json'
import { useParams } from "react-router-dom"

// import MUI components here //
import Paper from '@mui/material/Paper'

const Car = () => {
    const {id} = useParams()
    const car = cars[id-1]


    return (
        <>
        <h1> {car.Name}</h1>
        <h1> {car.Cylinders}</h1>
        
        </>
    )
}

export default Car
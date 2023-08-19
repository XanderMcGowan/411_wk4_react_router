import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";

// import MUI components here //
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";

const Car = () => {
  const { id } = useParams();
  const car = cars[id - 1];

  return (
    <Container fixed style={{width: "30vw"}}>
      <Paper elevation={3}>
        <h1> {car.Name}</h1>
        <Chip label={`Id: ${car.id}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Name: ${car.Name}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Miles Per Gallon: ${car.Miles_per_Gallon}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Cylinders: ${car.Cylinders}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Displacement: ${car.Displacement}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Horsepower: ${car.Horsepower}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Weight (lbs): ${car.Weight_in_lbs}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Acceleration: ${car.Acceleration}`} style={{margin: "0.25vh"}}/>
        <Chip label={`Orgin: ${car.Orgin}`} style={{margin: "0.25vh"}}/>
      </Paper>
    </Container>
  );
};

export default Car;

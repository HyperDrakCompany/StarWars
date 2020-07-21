import React from 'react'
import Card from 'react-bootstrap/Card'
import './starshipCard.css'
const StarshipCard = ({url, selectedShip}) => {
  console.log(selectedShip)
  return (
    <Card style={{width: '18rem'}}>
      <div>!!!</div>
      <Card.Img variant="top" src={url} />
      <Card.Body>
        <Card.Title>{selectedShip.fullInfo.name}</Card.Title>
        <Card.Text>
          Model: {selectedShip.fullInfo.model}
          <br />
          Manufacturer: {selectedShip.fullInfo.manufacturer}
          <br />
          Class: {selectedShip.fullInfo.starship_class}
          <br />
          Cost: {selectedShip.fullInfo.cost_in_credits}
          <br />
          Speed: {selectedShip.fullInfo.max_atmosphering_speed}
          <br />
          Hyperdrive Rating: {selectedShip.fullInfo.hyperdrive_rating}
          <br />
          MGLT: {selectedShip.fullInfo.MGLT}
          <br />
          Length: {selectedShip.fullInfo.length}
          <br />
          Cargo Capacity: {selectedShip.fullInfo.cargo_capacity}
          <br />
          Mimimum Crew: {selectedShip.fullInfo.crew}
          <br />
          Passengers: {selectedShip.fullInfo.passengers}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
export default StarshipCard

// MGLT: "80"
// cargo_capacity: "110"
// consumables: "1 week"
// cost_in_credits: "134999"
// created: "2014-12-12T11:00:39.817000Z"
// crew: "2"
// edited: "2014-12-20T21:23:49.883000Z"
// films: (3) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/"]
// hyperdrive_rating: "1.0"
// length: "14"
// manufacturer: "Koensayr Manufacturing"
// max_atmosphering_speed: "1000km"
// model: "BTL Y-wing"
// name: "Y-wing"
// passengers: "0"
// pilots: []

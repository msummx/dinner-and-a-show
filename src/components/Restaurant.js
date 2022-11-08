import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Restaurant = ({restaurantObj, handleAdd}) => {
    return (
        <Card style={{ width: '18rem' }} className="event">
            <Card.Body>
                <Card.Title>{restaurantObj.name}</Card.Title>
                <Card.Text>
                    {restaurantObj.location.address}
                    <br />
                    {restaurantObj.location.dma + ' ' + restaurantObj.location.region + ', ' + restaurantObj.location.postcode}
                    <br /><br />
                    <b>{restaurantObj.distance}m From Venue</b>
                    <br />
                    <Button variant="light" onClick={()=>{handleAdd(restaurantObj)}}>Add To Plan</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default Restaurant
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Restaurant = ({restaurantObj, handleAdd}) => {
    return (
        <Card style={{ width: '18rem' }} className="event">
            <Card.Body>
                <Card.Title>{restaurantObj.name}</Card.Title>
                <Card.Text>
                    {restaurantObj.vicinity}
                    <br />
                    <h2>{restaurantObj.rating} / 5</h2>
                    <br />
                    <Button variant="light" onClick={()=>{handleAdd(restaurantObj)}}>Add To Plan</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default Restaurant
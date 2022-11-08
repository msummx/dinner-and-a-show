import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';

const Event = ({eventObj, handleAdd}) => {
  return (
    <Card style={{ width: '18rem' }} className="event">
        <Card.Img variant="top" src={eventObj.images[4].url} />
        <Card.Body>
            <Card.Title><a href={eventObj.url} target='_blank' rel="noreferrer">{eventObj.name}</a></Card.Title>
            <Card.Text>
                {dayjs(eventObj.dates.start.localDate + eventObj.dates.start.localTime).format('MMM D, YYYY - h:mm a')}
                <br />
                {eventObj._embedded.venues[0].name}
                <br />
                {eventObj._embedded.venues[0].address.line1}
                <br />
                {eventObj._embedded.venues[0].city.name + ' ' + eventObj._embedded.venues[0].state.stateCode + ', ' + eventObj._embedded.venues[0].postalCode}
                <br /><br /><br />
                <Button variant="light" onClick={()=>{handleAdd(eventObj)}}>Add To Plan</Button>
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Event
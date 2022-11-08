import React from 'react'
import Card from 'react-bootstrap/Card';
import dayjs from 'dayjs';

const Plan = ({planObj}) => {
  return (
    <Card style={{ width: '18rem' }} className="event">
        <Card.Img variant="top" src={planObj.userEvent.images[4].url} />
        <Card.Body>
            <Card.Title><a href={planObj.userEvent.url}>{planObj.userEvent.name}</a></Card.Title>
            <Card.Text>
                {dayjs(planObj.userEvent.dates.start.localDate + planObj.userEvent.dates.start.localTime).format('MMM D, YYYY - h:mm a')}
                <br />
                {planObj.userEvent._embedded.venues[0].name}
                <br />
                {planObj.userEvent._embedded.venues[0].address.line1}
                <br />
                {planObj.userEvent._embedded.venues[0].city.name + ' ' + planObj.userEvent._embedded.venues[0].state.stateCode + ', ' + planObj.userEvent._embedded.venues[0].postalCode}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Plan
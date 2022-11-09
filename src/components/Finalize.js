import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useLocation, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import emailjs from '@emailjs/browser'

const Finalize = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const { planObj } = location.state

    const handleSubmit = e => {
        e.preventDefault()

        const templateParams = {
            name, 
            email,
            date: dayjs(planObj.userEvent.dates.start.localDate).format('MMM D, YYYY'),
            event_name: planObj.userEvent.name,
            event_url: planObj.userEvent.url,
            event_time: dayjs(planObj.userEvent.dates.start.localDate + planObj.userEvent.dates.start.localTime).format('h:mm a'),
            venue: planObj.userEvent._embedded.venues[0].name,
            venue_address1: planObj.userEvent._embedded.venues[0].address.line1,
            venue_address2: planObj.userEvent._embedded.venues[0].city.name + ' ' + planObj.userEvent._embedded.venues[0].state.stateCode + ', ' + planObj.userEvent._embedded.venues[0].postalCode,
            restaurant_name: planObj.userRestaurant.name,
            restaurant_address1: planObj.userRestaurant.location.address,
            restaurant_address2: planObj.userRestaurant.location.dma + ' ' + planObj.userRestaurant.location.region + ', ' + planObj.userRestaurant.location.postcode
        }

        emailjs.send('reservations', 'plans', templateParams, process.env.REACT_APP_EMAIL)
            .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
            console.log('FAILED...', error);
            });
        
        setName('')
        setEmail('')
        navigate('/')
    }
  return (
    <div>
        <Form onSubmit={handleSubmit} className="CreatePlanForm">
            <FloatingLabel label="Name"><Form.Control type="name" placeholder="Name" onChange={e=>{setName(e.target.value)}}/></FloatingLabel><br />
            <FloatingLabel label="Email"><Form.Control type="email" placeholder="email@email.com" onChange={e=>{setEmail(e.target.value)}}/></FloatingLabel><br />
            <Button type="submit" variant="light">Finalize</Button>
        </Form>
    </div>
  )
}

export default Finalize
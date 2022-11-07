import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addUserChoice } from '../actions/actions';
import { useDispatch } from 'react-redux';
import Geohash from 'latlon-geohash';

const CreatePlanForm = () => {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [radius, setRadius] = useState('10')
    const [location, setLocation] = useState('')

    const dispatch = useDispatch()
    navigator.geolocation.getCurrentPosition(position => {
        const geopoint = Geohash.encode(position.coords.latitude, position.coords.longitude, 9)
        setLocation(geopoint)
    })

    const handleSubmit = async e => {
        e.preventDefault()
        const userChoice = {from, to, radius, location}
        dispatch(addUserChoice(userChoice))
    }

  return (
    <Form className="CreatePlanForm" onSubmit={handleSubmit}>
        <Row className="CreatePlanRow">
            <Col>
                <div className="CreatePlanFormGroup">
                    <FloatingLabel label="From"><Form.Control type="date" placeholder="From" onChange={e=>{setFrom(e.target.value)}} /></FloatingLabel>
                    <FloatingLabel label="To"><Form.Control type="date" placeholder="To" onChange={e=>{setTo(e.target.value)}} /></FloatingLabel>
                </div>
            </Col>
        </Row>
        <Row className="CreatePlanRow">
            <Col>
                <FloatingLabel label="Radius"><Form.Select onChange={e=>{setRadius(e.target.value)}}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </Form.Select></FloatingLabel>
            </Col>
        </Row>
        <Button variant="light" type="submit">
            Submit
        </Button>

    </Form>
  )
}

export default CreatePlanForm
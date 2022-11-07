import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CreatePlanForm = () => {
    const [zip, setZip] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [radius, setRadius] = useState('')
    const [concerts, setConcerts] = useState(false)
    const [theatre, setTheatre] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        const userChoice = {zip, from, to, radius, concerts, theatre}
        console.log(userChoice)
    }

  return (
    <Form className="CreatePlanForm" onSubmit={handleSubmit}>
        <Row className="CreatePlanRow">
            <Form.Control placeholder="Zip Code" onChange={e=>{setZip(e.target.value)}} />
        </Row>
        <Row className="CreatePlanRow">
            <Col>
                <div className="CreatePlanFormGroup">
                    <FloatingLabel label="From"><Form.Control type="date" placeholder="From" onChange={e=>{setFrom(e.target.value)}} /></FloatingLabel>
                    <FloatingLabel label="To"><Form.Control type="date" placeholder="To" onChange={e=>{setTo(e.target.value)}} /></FloatingLabel>
                </div>
            </Col>
            <Col>
                <FloatingLabel label="Radius"><Form.Select onChange={e=>{setRadius(e.target.value)}}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </Form.Select></FloatingLabel>
            </Col>
        </Row>
        <Row className="CreatePlanRow">
            <div className="CreatePlanFormGroup">
                <Form.Check type="checkbox" label="Concerts" onChange={e=>{setConcerts(e.target.checked)}} />
                <Form.Check type="checkbox" label="Theatre" onChange={e=>{setTheatre(e.target.checked)}}/>
            </div>
        </Row>
        <Button variant="light" type="submit">
            Submit
        </Button>

    </Form>
  )
}

export default CreatePlanForm
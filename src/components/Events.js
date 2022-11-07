import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Event from './Event'
import Button from 'react-bootstrap/Button'

const Events = () => {
  const {location, radius, from, to} = useSelector(state => state.userChoice)
  const [events, setEvents] = useState()

  useEffect(() => {
    const getEvents = async () => {
      await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?geoPoint=${location}&radius=${radius}&startDateTime=${from}T00:00:00Z&endDateTime=${to}T23:59:59Z&apikey=${process.env.REACT_APP_TM_API}`)
      .then((response) => {
        return response.json()})
      .then((data) => {
        setEvents(data._embedded.events)
      })
    }

    getEvents()
  }, [])
  
  if (events !== undefined){
    return (
        <div className="events">
            {events.map(event => {
                return <Event eventObj={event} key={event.id} />
            })}
        </div>
    )
  }
}

export default Events
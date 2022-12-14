import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Event from './Event'
import { addEvent } from '../actions/actions'

const Events = () => {
  const {location, radius, from, to} = useSelector(state => state.userChoice)
  const [events, setEvents] = useState()
  const dispatch = useDispatch()

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
  }, [location, radius, from, to])

  const handleAdd = (eventObj) => {
    dispatch(addEvent(eventObj))
  }
  
  if (events !== undefined){
    return (
      <>
      <h2>Events</h2>
        <div className="events">
            {events.map(event => {
                return <Event eventObj={event} key={event.id} handleAdd={handleAdd} />
            })}
        </div>
      </>
    )
  }
}

export default Events
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Restaurant from './Restaurant'
import { addPlan } from '../actions/actions'

const Restaurants = () => {
    const event = useSelector(state => state.userEvent)
    const [restaurants, setRestaurants] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        const getRestaurants = async () => {
            await fetch(`https://api.foursquare.com/v3/places/search?ll=${event._embedded.venues[0].location.latitude}%2C${event._embedded.venues[0].location.longitude}&radius=3000&categories=13065`, {
                headers: {Authorization: process.env.REACT_APP_PLACES_API}
            })
            .then((response) => {
                return response.json()})
            .then((data)=> {
                setRestaurants(data.results)
            })
        }
        
        getRestaurants()
    }, [event._embedded.venues])

    const handleAdd = restaurantObj => {
        const planObj = {userEvent: event, userRestaurant: restaurantObj}
        dispatch(addPlan(planObj))
    }
  
    if (restaurants !== undefined){
        return (
            <>
            <h2>Restaurants</h2>
            <div className="events">
                {restaurants.map(restaurant => {
                return <Restaurant restaurantObj={restaurant} key={restaurant.fsq_id} handleAdd={handleAdd} />
            })}</div>
            </>
          )
    }
}

export default Restaurants
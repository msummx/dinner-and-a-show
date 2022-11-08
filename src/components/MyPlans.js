import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import Plan from './Plan';

const MyPlans = () => {
  const plans = useSelector(state => state.userPlans)

  return (
    <div className="events">{plans.map(plan =>{
      return <Plan key={uuidv4()} planObj={plan}/>
    })}</div>
  )
}

export default MyPlans
import React from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import Plan from './Plan';
import {Link} from 'react-router-dom';

const MyPlans = () => {
  const plans = useSelector(state => state.userPlans)

  if (plans.length > 0){
    return (
      <div className="events">{plans.map(plan =>{
        return <Plan key={uuidv4()} planObj={plan}/>
      })}</div>
    )
  }

  else {
    return (
      <div className="noPlans">
      <h2>Create some plans and find them here!</h2>
      <Link to="/createplan" className="btn btn-light">Go Now</Link>
      </div>
    )
  }
}

export default MyPlans
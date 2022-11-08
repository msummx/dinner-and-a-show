import React from 'react'
import CreatePlanForm from './CreatePlanForm'
import Events from './Events'
import { useSelector } from 'react-redux'
import Restaurants from './Restaurants'

const CreatePlan = () => {
  const {first, second, third} = useSelector(state => state.createPlan)

  if (first){
    return (
      <CreatePlanForm />
    )
  }

  if (second){
    return (
      <Events />
    )
  }

  if (third){
    return (
      <Restaurants />
    )
  }
}

export default CreatePlan
import React from 'react'
import CreatePlanForm from './CreatePlanForm'
import { useSelector } from 'react-redux'

const CreatePlan = () => {
  const choice = useSelector(state => state.userChoice)
  const {first, second, third} = useSelector(state => state.createPlan)

  if (first){
    return (
      <>
      <CreatePlanForm />
      </>
    )
  }

  if (second){
    return (
      <>
      <h2>{choice.location}</h2>
      <h2>{choice.from}</h2>
      <h2>{choice.to}</h2>
      <h2>{choice.radius}</h2>
      </>
    )
  }
}

export default CreatePlan
import React from 'react'
import Navigation from '../Navigation'

const BaseLayout = (props) => {
  return (
    <>
    <Navigation />
    {props.children}
    </>
  )
}

export default BaseLayout
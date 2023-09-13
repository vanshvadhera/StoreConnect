import React from 'react'

const WhyWithUsCard = (props) => {
  return (
    <div style={{maxWidth: "85%"}}>
        <h4 style={{color: "#2270e2"}}>{props.number}</h4>
        <h2>{props.heading}</h2>
        <h5>{props.subheading}</h5>
    </div>
  )
}

export default WhyWithUsCard

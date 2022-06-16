// import { Box } from '@chakra-ui/react'
import React from 'react'

export const TrendingCards = (props) => {
  return (
    <>
    <div>
        <div style={{width: "50%", borderTopLeftRadius: "20px", borderBottomRightRadius: "20px", height: "160px", border: "2px solid #f3f2f2", padding:"15px", textAlign: "center", margin:"auto", marginBottom: "40px"}}>
            <img style={{ margin:"auto", marginBottom: "16px"}} src={props.image} alt="" />
            <h3> {props.title} </h3>
            <p style={{color: "gray", fontSize: "16px"}}> {props.des} </p>
        </div>
    </div>
    </>
  )
}
// boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", 
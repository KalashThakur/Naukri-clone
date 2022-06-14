import { Box } from '@chakra-ui/react'
import React from 'react'

export const TrendingCards = (props) => {
  return (
    <div>
        <Box>
            <img src={props.image} alt="" />
            <h3> {props.title} </h3>
            <p> {} </p>
        </Box>
    </div>
  )
}

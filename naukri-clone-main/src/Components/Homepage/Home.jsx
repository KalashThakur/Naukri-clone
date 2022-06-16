import React from 'react'
import FirstDiv from './FirstDiv'
import styled from "./Home.module.css"
import { Navbar } from "../Navbar"
import {Trending} from './Trending'
import {Footer}  from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FirstDiv className={styled.display1}></FirstDiv>

      <div style={{ display: "flex" }}>
        <div>
        </div>
        <div>
          <Trending />
        </div>

      </div>
     <Footer />
    </div>
  )
}

export default Home

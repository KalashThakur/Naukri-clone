import React from 'react'
import { Footer } from '../components/Footer';
import './Home.module.css';
import { Box } from '@chakra-ui/react';
import MultipleItems from '../components/Trending';



export const Home = () => {
  return (
    <div>
        <Box>
        <h1 style={{fontSize: "32px", fontFamily: "sans-serif", fontWeight: "bold"}}>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <br /><br />
        <form action="">
        <input type="text" placeholder='Enter skills / designation / companies' />
        
        {/* <input type="text" placeholder='enter' /> */}
        <select name="" id="">
        <option>Select experience</option>
        <option value="Fresher">Fresher (less then 1 year)</option>
        <option value="1 year">1 year</option>
        <option value="2 year">2 year</option>
        <option value="3 year">3 year</option>
        <option value="4 year">4 year</option>
        <option value="5 year">5 year</option>
        <option value="6 year">6 year</option>
        <option value="7 year">7 year</option>
        <option value="8 year">8 year</option>
        </select>
        <input type="text" placeholder='Enter location' />
        <input type='submit' value='Search' className='btn' />
        </form>
        </Box>
        <br /><br />
        {/* <Trending /> */}
       <MultipleItems />
        {/* <SwipeToSlide /> */}
        {/* <Footer /> */}
    </div>
  )
}

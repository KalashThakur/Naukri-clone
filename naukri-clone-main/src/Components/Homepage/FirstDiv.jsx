import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { Redirect } from "react-router";
import { getJobs } from "../../Redux/JobSearchRedux/actions";
import styled from "./FirstDiv.module.css"


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


const FirstDiv = () => {

  const [job, setJob] = useState('');
  const [search, setIsSearch] = useState(false);

  const [location, setLocation] = useState('');
  const dispatch = useDispatch()

  // const isSearch = useSelector(state => state.job.isSearch)

  const handleSearch = () => {
    dispatch(getJobs(job, location));
    setIsSearch(true)
  }

  if (search) {
    return <Redirect to={`/search/${job}`} push />
  }
  return (
        <div className={styled.FirstDiv}>
    <div className={styled.FirstDiv1}>
        <h2 className={styled.header}>Find your dream job now</h2>
        <p style={{color: "grey", fontSize: "16px", marginLeft: "310px", marginTop: "10px"}}>5 lakhs+ jobs for you to explore</p>
        <div style={{ display: "flex", marginTop: '30px' }}>
          <div className={styled.search1}>

            <input className={styled.searchJob} style={{ width: "93%", height: "90%", border: "0px", fontSize: "18px" }} value={job} onChange={(e) => setJob(e.target.value)} placeholder="Skills" type="text" />

          </div>
          <div className={styled.search2} >
            <input className={styled.searchJob} style={{ width: "50%", height: "90%", border: "0px", fontSize: "18px" }} placeholder='Enter location' value={location} onChange={(e) => setLocation(e.target.value)} type="text" />
          </div>
          <button onClick={handleSearch} className={styled.btn}>Search</button>
        </div>

      </div>
    </div>
  )
}

export default FirstDiv

import React, { useState } from 'react'
import jobs from "../../jobs_response.mock.json"

const Cards = () => {
     const [data,setData]=useState(jobs.jobs.items)
     console.log(data)
  return (
    <div>
        {
            data.map((el,i) =>{
                 return <div className='card'>
                     {el._source.company_name}
                     <div>{el._source.job_role.substring(1,el._source.job_role.length-1)}</div>
                     <div>{el._source.location}</div>
                     {/* <div className='lower_part'></div> */}
                 </div>
            })
        }
    </div>
  )
}

export default Cards
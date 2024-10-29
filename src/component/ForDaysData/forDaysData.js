import React from 'react'
import { useSelector } from 'react-redux'

const ForDaysData = () => {
const data= useSelector((store)=>store.fiveDaysData)


//Here must be rendered 4 days weahter data but smth went wrong


  return (<></>

  )
}

export default ForDaysData
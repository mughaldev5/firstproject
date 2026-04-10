import React, { useEffect, useState } from 'react'
import testApi from '../services/testApi.json'
const PracticeTest = () => {
const [userData, setUserData] = useState([])

useEffect(() =>{
    getUserData();
},[])
    async function getUserData() {
        const url = "secondaryImages";
        let response = await fetch(url);
        response = await response.json()
        setUserData(response.secondaryImages)
    }
    console.log(userData)
  return (
    <div>
      
    </div>
  )
}

export default PracticeTest

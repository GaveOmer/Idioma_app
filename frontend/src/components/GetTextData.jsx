import { useEffect, useState } from 'react'
import axios from 'axios'
const GetTextData = ({onDataReceived}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(response => {
        setData(response.data)
        onDataReceived(response.data)
      })
      .catch(error => {
        console.error("error is here:", error)
      })
  }, [onDataReceived])
}

export default GetTextData
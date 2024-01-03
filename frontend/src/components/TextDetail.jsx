import { useEffect, useState } from 'react'
import axios from 'axios'
const TextDetail = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error("error is here:", error)
      })
  }, [])

	return (
		<div>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <p>{item.id}</p>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
		</div>
	)
}

export default TextDetail



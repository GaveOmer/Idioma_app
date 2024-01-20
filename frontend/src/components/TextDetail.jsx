import { useState } from 'react'
import GetTextData from './GetTextData'
import { useParams } from 'react-router-dom'
const TextDetail = () => {
  const { slug } = useParams()
  const [receivedData, setReceievedData] = useState([])
	const handleDataReceived = (data) => {
		setReceievedData(data)
  }
	return 
		// <div>
    //   <GetTextData onDataReceived={handleDataReceived}/>
    //     {receivedData.map(item => (
    //       <div key={item.id}>
    //         {if (item.id === id)
    //         {
    //           <p></p>
    //         }}
    //     ))}<div/>
		// </div>

}

export default TextDetail



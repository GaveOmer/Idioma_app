import { useState } from 'react';
import GetTextData from './GetTextData';
import { Link } from 'react-router-dom';
const TextsPage = () => {
	const [receivedData, setReceievedData] = useState([])
	const handleDataReceived = (data) => {
		setReceievedData(data)
	}
	return (
		<div>
			<h1 className='mt-5 mb-5 fs-2 d-flex justify-content-center'>
				Reading texts by your level
			</h1>
			<div className='row row-cols-1 row-cols-md-4 g-4'>
				<GetTextData onDataReceived={handleDataReceived}/>
				{receivedData.map(item => (
					<div key={item.slug} className='col'>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>
								<Link
									className='link-offset-2 link-offset-3-hover link-underline
          link-underline-opacity-0 link-underline-opacity-75-hover'
									to={`/texts/${item.slug}`}
								>{item.title}
								</Link>
							</h5>
						</div>
						
					</div>
					
				</div>
				))}
				
			</div>
		</div>
	)
}

export default TextsPage;


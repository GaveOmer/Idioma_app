import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import MyNavbar from './components/MyNavbar'
import TextsPage from './components/TextsPage'
import TextDetail from './components/TextDetail'

const App = () => {
	const customStyles = {
    fontFamily: 'Poppins, sans-serif',
  };
	return (
		<div style={customStyles}>
			<MyNavbar />
			<main className='container' style={{ flex: '1 1 auto' }}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/texts' element={<TextsPage />} />
					<Route path='/texts/:id' element={<TextDetail/>}/>
				</Routes>
			</main>
			<MyFooter />
		</div>	
	)
}

export default App

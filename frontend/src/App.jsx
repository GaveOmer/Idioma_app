import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/MyFooter'
import MyNavbar from './components/MyNavbar'
import TextsPage from './components/TextsPage'
import TextDetail from './components/TextDetail'
const App = () => {
	return (
		<div>
			<MyNavbar />
			<main className='container' style={{ flex: '1 1 auto' }}>
				<TextsPage />
				<TextDetail/>
			</main>
			<MyFooter />
		</div>
	)
}

export default App

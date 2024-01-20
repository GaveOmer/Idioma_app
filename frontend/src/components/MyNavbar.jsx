import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
	return (
		<Navbar expand='lg' style={{ backgroundColor: '#A356CC' }}>
			<Container>
				<Navbar.Brand as={Link} to='/' className='nav-link'>
					<div className='fs-3 me-2'>🦄&nbsp;&nbsp;Idioma</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarSupportedContent' />
				<Navbar.Collapse id='navbarSupportedContent'>
					<Nav className='mb-2 mb-lg-0'>
						<Nav.Link as={Link} to='/' className='nav-link fs-5'>
							Roadmaps
						</Nav.Link>
						<Nav.Link as={Link} to='/texts' className='nav-link fs-5'>
							Texts
						</Nav.Link>
						<Nav.Link as={Link} to='/' className='nav-link fs-5'>
							Tasks
						</Nav.Link>
						<Nav.Link as={Link} to='/' className='me-2 nav-link fs-5'>
							Profile
						</Nav.Link>
					</Nav>
					<Button as={Link} variant='outline-dark fs-5' to='/' role='button'>
						Log in
					</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavbar

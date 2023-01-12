// TODO: answer here

import { Routes, Route } from 'react-router-dom';
import { Box, Center, Heading } from '@chakra-ui/react';

import './App.css';

import Home from './Home.js';
import Detail from './Detail';
import Cards from './Cards';

const App = () => {
	const MyRouter = () => {
		return (
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='card'>
					<Route index element={<Cards />} />
					<Route path=':id' element={<Detail />} />
				</Route>
				<Route path='*' element='404 Page not found!' />
			</Routes>
		);
	}; // TODO: replace this

	return (
		<div className='App'>
			{/* Navbar */}
			<Box w='100vw' bg='#b25819' p={6}>
				<Center>
					<Heading as='h1' color='#e2ded5'>
						Yugi-Oh Card Deck
					</Heading>
				</Center>
			</Box>

			{/* Route */}
			<MyRouter />
		</div>
	);
};

export default App;

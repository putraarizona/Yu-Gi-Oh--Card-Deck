import { useState, useEffect } from 'react';
import { SimpleGrid, Select } from '@chakra-ui/react';

import Cards from './Cards';
import './Home.css';

function Home() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

	const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4';
	const fetchData = async () => {
		setLoading(true);
		const response = await fetch(url);
		const datas = await response.json();
		console.log(datas.data);
		setData(datas.data);
		setLoading(false);
		return datas;
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	function sortData(type) {
		if (type === 'Name') {
			setData([...data].sort((a, b) => (a.name > b.name ? 1 : -1)));
		}
		if (type === 'Attack') {
			setData([...data].sort((a, b) => a.atk - b.atk));
		}
		if (type === 'Defence') {
			setData([...data].sort((a, b) => a.def - b.def));
		}
	}

	return (
		<SimpleGrid>
			<Select name='sort' placeholder='Sort By' onChange={(e) => sortData(e.target.value)}>
				<option value='Name'>name</option>
				<option value='Attack'>attack</option>
				<option value='Defence'>defence</option>
			</Select>
			<div className='Home'>{loading ? <div>Loading...</div> : <Cards card={data} />}</div>
		</SimpleGrid>
	);
}

export default Home;

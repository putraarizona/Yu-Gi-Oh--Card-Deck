// TODO: answer here
import { Box, Button, Image, Heading, Text } from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Detail() {
	const { id } = useParams();
	const [card, setCard] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchData = async (id) => {
		setLoading(true);
		const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
		const data = await response.json();
		setCard(data.data[0]);
		setLoading(false);
	};

	useEffect(() => {
		// TODO: answer here
		fetchData(id);
	}, [id]);

	{
		card && console.log(card);
	}
	return (
		<>
			<Link to='/'>
				<Button>Back</Button>
			</Link>
			{loading && <h1>Loading...</h1>}
			{card && (
				<Box>
					<Image src={`https://images.ygoprodeck.com/images/cards/${card.id}.jpg`} />
					<Heading>{card.name}</Heading>
					<Text>Level: {card.level}</Text>
					<Text>{card.attribute}</Text>
					<Text>
						ATK/{card.atk} DEF/{card.def}
					</Text>
					<Text>
						[ {card.type} / {card.race} ]
					</Text>
					<Text>{card.desc}</Text>
				</Box>
			)}
			<Box>
				{card &&
					card.card_sets.map((set, index) => (
						<Box key={index}>
							<Text>Name: {set.set_name}</Text>
							<Text>Code: {set.set_code}</Text>
							<Text>Rarity: {set.set_rarity}</Text>
							<Text>Price: {set.set_price}</Text>
						</Box>
					))}
			</Box>
		</>
	); // TODO: replace this
}

export default Detail;

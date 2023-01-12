// TODO: answer here
import { Box, Image, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card({ card }) {
	return (
		<>
			{card &&
				card.length > 0 &&
				card.map((item) => (
					<Link key={item.id} to={`/card/${item.id}`}>
						<Box className='yugioh-card'>
							<Image src={`https://images.ygoprodeck.com/images/cards/${item.id}.jpg`} />
							<Heading as='h2'>{item.name}</Heading>
						</Box>
					</Link>
				))}
		</>
	); // TODO: replace this
}

export default Card;

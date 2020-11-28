import React, { Component } from 'react';

// Comps
import Hero from '../components/home/Hero';
import HomeText from '../components/home/HomeText';
import HomeWork from '../components/home/HomeWork';
import HomeMessage from '../components/home/HomeMessage';
import HomeStack from '../components/home/HomeStack';
import HomeMap from '../components/home/HomeMap';
import HomeClients from '../components/home/HomeClients';
import Bottom from '../components/Bottom';
import Footer from '../components/Footer';

class home extends Component {

	render() {
    
		return (
			<div>
				<Hero />
				<HomeText />
				<HomeWork />
				<HomeMessage />
				<HomeMap />
				<HomeStack />
				<HomeClients />
				<Bottom text={true} />
				<Footer />
			</div>
		);
	}
}

export default home;
import React from 'react';
import './styles.css';
import './Home.css';
import nyt from './images/nyt.png';
import npr from './images/npr.jpg';
import cnn from './images/cnn.png';
import newsf from './images/favicon.png';
import twitter from './images/twitter.png';

const Home = () => (
	<div>
		<img src={twitter} alt="Twitter logo" class="twitter-bg"/>
		<div class="intro">
			<div class="component">
				<h1 class="headline">Twitter News, analyzed.</h1>
				<p></p>
				<p class="text">We aim to provide a comprehensive view of how different news companies tweet their content.</p>
			</div>
		</div>

		<div class="companies">
			<div class="component">
				<h1 class="subhead">The companies</h1>
				<br></br>
				<div class="logos">
					<img src={nyt} alt="New York Times logo" class="circle"/>
					<img src={cnn} alt="CNN logo" class="circle"/>
					<img src={npr} alt="NPR logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
				</div>
				<br></br>
				<br></br>
				<br></br>
				<div class="logos">
					<img src={newsf} alt="logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
					<img src={newsf} alt="logo" class="circle"/>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
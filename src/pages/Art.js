import React from 'react'
// import preset from '@rebass/preset'
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import { Image, Text } from 'theme-ui'

export default class Home extends React.PureComponent {
	render(){
		return (
			<ThemeProvider theme={preset}>
					<Header title="ZCY"/>
					<div className="pageRoot">
					<Dock />
					<div className="cvDiv">
						<Text>Cet oiseau fabuleux dont on parle dans les légendes indiennes et qui parait-il vient au monde sans pattes de sorte qu’il ne se pose jamais.</Text>
						<Image className= "coverImage" src={`${process.env.PUBLIC_URL}/artFiles/clay1.jpg`} />
						<Image className= "coverImage" src={`${process.env.PUBLIC_URL}/artFiles/clay2.jpg`} />
					</div>
					</div>
			</ThemeProvider>
		);
	}
}

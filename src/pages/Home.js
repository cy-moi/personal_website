import React from 'react'
// import preset from '@rebass/preset'
import { ThemeProvider } from 'theme-ui'
import Header from '../components/Header'
import Dock from '../components/Dock'
import './Home.css'
import preset from '../styles/theme'
import { Text } from 'theme-ui'

export default class Home extends React.PureComponent {
	render(){
		return (
			<ThemeProvider theme={preset}>
					<Header title="ZCY"/>
					<div className="pageRoot">
					<Dock />
					<div className="cvDiv">
						<div className="sloganDiv">
							<Text sx={{
								fontSize: 4,
								fontWeight: 'bold',
							}}>
								a Singleton👧 who enjoys her own time alone, coding, reading, writing, learning, drawing, crafting.
								My favorite artists: Sylvia Plath & Jean-Luc Godard.
							</Text>
							<Text sx={{
								fontSize: 4,
								fontWeight: 'bold',
							}}>

							</Text>
						</div>
						{/* <Image className="coverDiv" src={process.env.PUBLIC_URL+"/cover.png"}></Image> */}
					</div>
					</div>
			</ThemeProvider>
		);
	}
}
